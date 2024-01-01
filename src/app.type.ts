import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
  params?: {};
}

export type Discount = {
  type: string;
  percent: number;
  label: string;
  tag: string[];
};

export type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  unit: string;
  discount?: Discount;
  images: string[];
  tags?: string[];
};
