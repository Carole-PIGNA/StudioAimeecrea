"use client";

import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText?: string;
  buttonAction?: () => void;
}

export default function Modal({
  show,
  onClose,
  title,
  message,
  buttonText = "Fermer",
  buttonAction,
}: ModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[var(--background)]/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-xl p-6 max-w-sm w-full text-center space-y-4 transition-colors duration-300">
        <h2 className="text-lg font-semibold text-[#d4af37]">{title}</h2>
        <p className="text-sm">{message}</p>
        <div className="flex flex-col space-y-2">
          {buttonAction ? (
            <button
              onClick={buttonAction}
              className="mt-2 bg-[#d4af37] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#c49e2f] transition"
            >
              {buttonText}
            </button>
          ) : (
            <button
              onClick={onClose}
              className="mt-2 bg-[#d4af37] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#c49e2f] transition"
            >
              {buttonText}
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs text-gray-500 underline mt-2"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
