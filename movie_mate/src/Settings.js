// src/Settings.js
import React from 'react';
import { useTheme } from './ThemeContext';

function Settings() {
    const { theme, toggleTheme, fontSize, changeFontSize, fontType, changeFontType } = useTheme();

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <div className="setting-item">
                <button onClick={toggleTheme} className="setting-button">Toggle Theme (Current: {theme})</button>
            </div>
            <div className="setting-item">
                <label className="setting-label">Font Size:</label>
                <select value={fontSize} onChange={(e) => changeFontSize(e.target.value)} className="setting-select">
                    <option value="12px">12px</option>
                    <option value="14px">14px</option>
                    <option value="16px">16px</option>
                    <option value="18px">18px</option>
                    <option value="20px">20px</option>
                    <option value="22px">22px</option>
                </select>
            </div>
            <div className="setting-item">
                <label className="setting-label">Font Type:</label>
                <select value={fontType} onChange={(e) => changeFontType(e.target.value)} className="setting-select">
                    <option value="Arial, sans-serif">Sans-serif (Arial)</option>
                    <option value="'Times New Roman', serif">Serif (Times New Roman)</option>
                    <option value="'Courier New', monospace">Monospace (Courier New)</option>
                    {/* Lets put more options if need be */}
                </select>
            </div>
            <p className="navigation-guide">Use the navigation bar to explore different pages!</p>
        </div>
    );
}

export default Settings;
