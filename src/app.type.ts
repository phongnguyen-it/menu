import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
  params?: {};
}

export type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  images: string[];
};
