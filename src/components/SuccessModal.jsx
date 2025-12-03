import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import './SuccessModal.css';

export default function SuccessModal({ isOpen, onClose, title, message }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content animate-scale-in">
                <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className="modal-body">
                    <div className="modal-icon">
                        <CheckCircle2 size={64} strokeWidth={1.5} />
                    </div>
                    <h3 className="modal-title">{title || "Thank You!"}</h3>
                    <p className="modal-message">{message || "We have received your query."}</p>

                    <button className="btn btn-primary modal-action-btn" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
