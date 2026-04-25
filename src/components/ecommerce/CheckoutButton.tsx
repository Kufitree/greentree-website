"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface CheckoutButtonProps {
  productId: string;
  requireBundle?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({ productId, requireBundle = false, variant = 'primary', size = 'lg', fullWidth = true, children }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, requireBundle }),
      });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to initiate checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      fullWidth={fullWidth} 
      onClick={handleCheckout} 
      disabled={loading}
    >
      {loading ? "กำลังเปลี่ยนหน้าไปยังระบบชำระเงินที่ปลอดภัย..." : children}
    </Button>
  );
};
