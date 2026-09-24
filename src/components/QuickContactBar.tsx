import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { FARM_CONTACT } from '../data/farmData.ts';

interface QuickContactBarProps {
  onOpenEnquiry: () => void;
}

export const QuickContactBar: React.FC<QuickContactBarProps> = ({ onOpenEnquiry }) => {
  return (
    <aside aria-label="Quick Mobile Actions" className="fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${FARM_CONTACT.phone}`}
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-emerald-800 rounded-lg active:bg-emerald-900 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-300" />
          <span>Call Farm</span>
        </a>

        <a
          href={FARM_CONTACT.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-stone-900 bg-emerald-400 rounded-lg active:bg-emerald-500 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenEnquiry}
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-amber-600 rounded-lg active:bg-amber-700 transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Enquiry</span>
        </button>
      </div>
    </aside>
  );
};
