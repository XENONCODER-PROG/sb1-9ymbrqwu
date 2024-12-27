import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ReactionBar } from '../ReactionBar';

export function DiscussionSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-800">Fan Discussion</h2>
      </div>
      <ReactionBar />
    </div>
  );
}