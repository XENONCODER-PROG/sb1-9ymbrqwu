import React from 'react';
import { TrendingUp } from 'lucide-react';

export function TrendingSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-800">Trending</h2>
      </div>
      <div className="space-y-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="font-medium text-gray-800">#INDvAUS</p>
          <p className="text-sm text-gray-600">23.5K discussions</p>
        </div>
      </div>
    </div>
  );
}