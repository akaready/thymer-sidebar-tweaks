"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = "/*\n * Thymer Plugin Settings UI \u2014 Design Tokens\n *\n * Canonical CSS custom properties for the plugin settings panel system.\n * Plugins consume this verbatim; component CSS reads from these vars.\n *\n * See shared/settings-ui/DESIGN.md for rationale.\n *\n * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).\n * Fallbacks use color-mix(currentColor) so panels work when a token is absent.\n */\n\n.tps-panel {\n  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-text:           var(--text-default,   currentColor);\n  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));\n  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));\n  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));\n\n  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-bg-input:       var(--input-bg-color,\n                        color-mix(in srgb, currentColor 6%, transparent));\n  --tps-bg-hover:       var(--hover-subtle,\n                        var(--sidebar-bg-hover,\n                        color-mix(in srgb, currentColor 8%, transparent)));\n  --tps-bg-active:      var(--active-bg-color,\n                        color-mix(in srgb, currentColor 12%, transparent));\n\n  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-divider:        var(--divider-color,\n                        var(--thin-divider-color,\n                        color-mix(in srgb, currentColor 14%, transparent)));\n  --tps-border:         var(--input-border-color,\n                        var(--divider-color,\n                        color-mix(in srgb, currentColor 22%, transparent)));\n  --tps-border-strong:  var(--titlebar-border-color,\n                        var(--selection-border,\n                        color-mix(in srgb, currentColor 32%, transparent)));\n\n  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-accent:         var(--logo-color, currentColor);\n  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);\n  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));\n\n  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-danger:         var(--enum-red-fg, #ef4444);\n  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);\n  --tps-warning:        var(--text-warning,\n                        var(--enum-yellow-fg, #f59e0b));\n  --tps-success:        var(--enum-green-fg, #10b981);\n  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);\n\n  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));\n\n  /* Panel chrome */\n  --tps-panel-bg:       var(--panel-bg-color, transparent);\n  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);\n\n  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  /* Font is INHERITED from Thymer's panel chrome (see components.css). */\n\n  --tps-fs-title:       18px;\n  --tps-fs-lede:        13px;\n  --tps-fs-section:     11px;\n  --tps-fs-hint:        12px;\n  --tps-fs-label:       13px;\n  --tps-fs-desc:        12px;\n  --tps-fs-body:        13px;\n  --tps-fs-value:       12px;\n  --tps-fs-button:      12px;\n  --tps-fs-list-header: 10px;\n\n  --tps-lh-tight:       1;\n  --tps-lh-snug:        1.2;\n  --tps-lh-base:        1.4;\n  --tps-lh-loose:       1.5;\n\n  --tps-fw-regular:     400;\n  --tps-fw-medium:      500;\n  --tps-fw-semibold:    600;\n  --tps-fw-bold:        700;\n\n  --tps-ls-section:     0.06em;\n  --tps-ls-list:        0.08em;\n  --tps-ls-title:       0;\n\n  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-space-1:        4px;\n  --tps-space-2:        8px;\n  --tps-space-3:        12px;\n  --tps-space-4:        16px;\n  --tps-space-5:        24px;\n  --tps-space-6:        32px;\n  --tps-space-7:        48px;\n\n  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-radius-sm:      4px;\n  --tps-radius-md:      6px;\n  --tps-radius-lg:      8px;\n  --tps-radius-pill:    999px;\n  --tps-radius-circle:  50%;\n\n  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);\n  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);\n  --tps-dur-fast:       80ms;\n  --tps-dur-base:       160ms;\n\n  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);\n\n  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-control-h-sm:   28px;\n  --tps-control-h-md:   32px;\n  --tps-input-w:        64px;\n  --tps-num-step-w:     28px;\n  --tps-swatch-size:    22px;\n  --tps-thumb-size:     16px;\n  --tps-track-h:        6px;\n\n  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);\n  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tps-panel {\n    --tps-dur-fast:     1ms;\n    --tps-dur-base:     1ms;\n  }\n}\n";

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: baseline;
  align-self: baseline;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

.tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-plugin-header-icon,
.tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  transform: translateY(2px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el.setAttribute(k, v);
          }
        } else {
          el.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el, children);
    return el;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    return h("div", { class: cls }, ...children);
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready"
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null
      )
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");
  function section({ label, hint, collapsible, defaultOpen = true, open, onToggle, summary, body = [] }) {
    const bodyChildren = Array.isArray(body) ? body : [body];
    const bodyEl = h("div", { class: "tps-section-body" }, ...bodyChildren);
    if (!collapsible) {
      return h(
        "section",
        { class: "tps-section" },
        h("div", { class: "tps-section-label" }, label),
        hint ? h("p", { class: "tps-section-hint" }, hint) : null,
        bodyEl
      );
    }
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const sectionEl = h("section", {
      class: "tps-section tps-section--collapsible",
      dataset: { open: String(initialOpen) }
    });
    const chev = h("span", { class: "tps-section-chev", "aria-hidden": "true" }, "\u25B8");
    const labelEl = h("span", { class: "tps-section-label" }, label);
    const summaryEl = h("span", { class: "tps-section-summary" });
    const paintSummary = /* @__PURE__ */ __name((isOpen) => {
      summaryEl.replaceChildren();
      if (isOpen || summary == null) return;
      const content = typeof summary === "function" ? summary() : summary;
      if (content == null || content === "") return;
      if (typeof content === "string") summaryEl.textContent = content;
      else summaryEl.appendChild(content);
    }, "paintSummary");
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      sectionEl.dataset.open = String(nextOpen);
      header.setAttribute("aria-expanded", String(nextOpen));
      paintSummary(nextOpen);
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    const header = h("button", {
      type: "button",
      class: "tps-section-header",
      "aria-expanded": String(initialOpen),
      onClick: /* @__PURE__ */ __name(() => setOpen(sectionEl.dataset.open !== "true"), "onClick")
    }, chev, labelEl, summaryEl);
    paintSummary(initialOpen);
    sectionEl.appendChild(header);
    if (hint) sectionEl.appendChild(h("p", { class: "tps-section-hint" }, hint));
    sectionEl.appendChild(bodyEl);
    return sectionEl;
  }
  __name(section, "section");
  function optionRow({ type = "checkbox", name, value, label, desc, checked, onChange }) {
    const input = h("input", {
      type,
      name,
      value,
      checked: !!checked,
      onChange: onChange ? (e) => onChange(e) : null
    });
    const labelEl = h("span", { class: "tps-opt-label" }, label);
    const descEl = desc ? h("span", { class: "tps-opt-desc" }, desc) : null;
    return h("label", { class: "tps-opt" }, input, labelEl, descEl);
  }
  __name(optionRow, "optionRow");
  function numberRow({ label, value, min, max, step = 1, unit, defaultValue, onChange, onReset }) {
    const clamp = /* @__PURE__ */ __name((next) => {
      let v = Number.isFinite(next) ? next : Number(value) || 0;
      if (min != null) v = Math.max(min, v);
      if (max != null) v = Math.min(max, v);
      return v;
    }, "clamp");
    const input = h("input", {
      type: "number",
      class: "tps-num-input",
      value,
      min,
      max,
      step,
      onInput: /* @__PURE__ */ __name((e) => {
        const target = (
          /** @type {HTMLInputElement} */
          e.target
        );
        onChange && onChange(Number(target.value), e);
      }, "onInput"),
      onKeyDown: /* @__PURE__ */ __name((e) => {
        if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
        e.preventDefault();
        const base = Number.isFinite(Number(input.value)) ? Number(input.value) : Number(value) || 0;
        const direction = e.key === "ArrowUp" ? 1 : -1;
        input.value = String(clamp(base + direction * step * (e.shiftKey ? 10 : 1)));
        onChange && onChange(Number(input.value), e);
      }, "onKeyDown")
    });
    const minus = h("button", {
      type: "button",
      class: "tps-num-step",
      "aria-label": "Decrease",
      onClick: /* @__PURE__ */ __name(() => {
        const v = Number(input.value) - step;
        input.value = String(clamp(v));
        onChange && onChange(Number(input.value));
      }, "onClick")
    }, "\u2212");
    const plus = h("button", {
      type: "button",
      class: "tps-num-step",
      "aria-label": "Increase",
      onClick: /* @__PURE__ */ __name(() => {
        const v = Number(input.value) + step;
        input.value = String(clamp(v));
        onChange && onChange(Number(input.value));
      }, "onClick")
    }, "+");
    const unitEl = unit ? h("span", { class: "tps-num-unit" }, unit) : null;
    const reset = defaultValue != null ? h("button", {
      type: "button",
      class: "tps-num-reset",
      hidden: value === defaultValue,
      onClick: /* @__PURE__ */ __name(() => {
        input.value = String(defaultValue);
        onChange && onChange(defaultValue);
        onReset && onReset();
      }, "onClick")
    }, "Reset") : null;
    const numEl = h("div", { class: "tps-num" }, minus, input, plus, unitEl, reset);
    if (label) {
      return h(
        "div",
        { class: "tps-num-grid" },
        h("div", { class: "tps-num-label" }, label),
        numEl
      );
    }
    return numEl;
  }
  __name(numberRow, "numberRow");

  // ../../shared/telemetry/ping.js
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter.count({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");

  // ../../shared/plugin-version.js
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    if (!plugin || typeof plugin.saveConfiguration !== "function") return;
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      await plugin.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");

  // options.js
  var BODY_SCOPE_CLASS = "plg-sidebar-tweaks";
  var TAG_ROW_ATTR = "data-plg-st-tag";
  var SEPARATOR_ROW_ATTR = "data-plg-sidebar-seperator";
  var TWEAKS_STYLE_ID = "plg-sidebar-tweaks-runtime-style";
  var TAGS_HEADER_GUID = "id-hdr-tags";
  var COLLECTIONS_HEADER_GUID = "id-hdr-collections";
  var PIN_TAGS_CLASS = "plg-st-pin-tags";
  var PIN_TAGS_PARKED_CLASS = "plg-st-pin-tags-parked";
  var COLLECTIONS_SCROLL_CLASS = "plg-st-collections-scroll";
  var BOTTOM_STACK_CLASS = "plg-st-sidebar-bottom";
  var HIDE_COLLS_HDR_CLASS = "plg-st-hide-colls-hdr";
  var COLL_RESTORED_ATTR = "data-plg-st-coll-restored";
  var MIN_COLLAPSED_SIDEBAR_WIDTH = 48;
  var OVERLAY_STACK_Z_INDEX = 1e4;
  var OVERLAY_STACK_SELECTORS = Object.freeze([
    ".cmdpal--inline",
    ".cmdpal--dialog",
    ".dropdown",
    ".link-menu",
    ".tooltip-element-top",
    ".autocomplete"
  ]);
  var WORKSPACE_PICKER_GUID = "id-workspace";
  var DEFAULT_OPTIONS = Object.freeze({
    // Visibility — sidebar order
    hideCollections: false,
    hideCollectionsHeader: false,
    hideTags: false,
    hideTrash: false,
    hideCollapseArrow: false,
    hideSearch: false,
    hideJump: false,
    hideCollectionOptionMenus: false,
    hideWorkspaceSwitcher: false,
    hideCollapsedChevron: false,
    hideSidebarScrollbar: false,
    // Renaming — custom heading labels ('' = leave Thymer's default)
    renameCollections: "",
    renameTags: "",
    renameTrash: "",
    // Behavior
    emptySidebarClick: true,
    pinTagsToBottom: false,
    // Layout toggles
    fixPanelAnimation: true,
    // Tuned layout — spacing moved from css-global into plugin panel
    // lockAvatarPosition: toggle = lock avatar, value = its top offset (merged with
    // the former standalone "sidebar top margin").
    lockAvatarPosition: { enabled: true, value: 8 },
    contextMenuWidth: { enabled: false, value: 250 },
    collapsedSidebarWidth: { enabled: false, value: 48 },
    expandedSidebarWidth: { enabled: false, value: 240 },
    collectionRowGap: { enabled: true, value: 6 },
    // Minimum row height (hover highlight). Normalizes collections that omit the + button.
    collectionRowHeight: { enabled: true, value: 28 },
    // x-axis shift of the collapsed collection chevron (negative = left, positive = right).
    chevronOffset: { enabled: false, value: 0 }
  });
  var TOGGLE_KEYS = (
    /** @type {const} */
    [
      "hideCollections",
      "hideCollectionsHeader",
      "hideTags",
      "hideTrash",
      "hideCollapseArrow",
      "hideSearch",
      "hideJump",
      "hideCollectionOptionMenus",
      "hideWorkspaceSwitcher",
      "hideCollapsedChevron",
      "hideSidebarScrollbar",
      "emptySidebarClick",
      "pinTagsToBottom",
      "fixPanelAnimation"
    ]
  );
  var STRING_KEYS = (
    /** @type {const} */
    [
      "renameCollections",
      "renameTags",
      "renameTrash"
    ]
  );
  var RENAME_GUIDS = Object.freeze({
    renameCollections: "id-hdr-collections",
    renameTags: "id-hdr-tags",
    renameTrash: "id-hdr-trash"
  });
  var TUNED_KEYS = (
    /** @type {const} */
    [
      "lockAvatarPosition",
      "contextMenuWidth",
      "collapsedSidebarWidth",
      "expandedSidebarWidth",
      "collectionRowGap",
      "collectionRowHeight",
      "chevronOffset"
    ]
  );
  var SIDEBAR_SCOPE = ".sidebar";
  var SIDEBAR_VISIBILITY_PROBE = {
    hideCollections: {
      label: "Collections section",
      selectors: [
        '.sidebar--icons [data-guid="id-hdr-collections"]',
        ".sidebar--icons .sidebar-item-collsheading",
        '.sidebar--icons .sidebar-item-collection:not([data-guid^="trashed-"])'
      ]
    },
    hideCollectionsHeader: {
      label: "Collections header",
      selectors: [
        '.sidebar--icons [data-guid="id-hdr-collections"]',
        ".sidebar--icons .sidebar-item-collsheading"
      ]
    },
    hideTags: {
      label: "Tags header",
      selectors: ['.sidebar--icons [data-guid="id-hdr-tags"]']
    },
    hideTrash: {
      label: "Trash header",
      selectors: ['.sidebar--icons [data-guid="id-hdr-trash"]']
    },
    hideCollapseArrow: {
      label: "Collapse arrow",
      selectors: [".sidebar .sidebar--toggler"]
    },
    hideJump: {
      label: "Jump",
      selectors: [`${SIDEBAR_SCOPE} [data-guid="id-jump"]`]
    },
    hideSearch: {
      label: "Search",
      selectors: [
        `${SIDEBAR_SCOPE} [data-guid="id-search"]`,
        `${SIDEBAR_SCOPE} [data-guid="id-search-collapsed"]`
      ]
    }
  };
  function normalizeOptions(raw) {
    const source = raw && typeof raw === "object" ? (
      /** @type {Record<string, unknown>} */
      raw
    ) : {};
    const migrated = { ...source };
    if (migrated.removePanelResizeGutter != null && migrated.fixPanelAnimation == null) {
      migrated.fixPanelAnimation = migrated.removePanelResizeGutter;
    }
    if (migrated.hideCollapsedSearch != null && migrated.hideSearch == null) {
      migrated.hideSearch = migrated.hideCollapsedSearch;
    }
    if (migrated.inlineContextMenuWidth != null && migrated.contextMenuWidth == null) {
      migrated.contextMenuWidth = migrated.inlineContextMenuWidth;
    }
    if (migrated.lockAvatarPosition == null || typeof migrated.lockAvatarPosition !== "object") {
      const topPad = migrated.sidebarTopPadding && typeof migrated.sidebarTopPadding === "object" ? finiteNumber(
        /** @type {any} */
        migrated.sidebarTopPadding.value,
        8
      ) : 8;
      const enabled = migrated.lockAvatarPosition === true || migrated.lockAvatarPosition == null;
      migrated.lockAvatarPosition = { enabled, value: topPad };
    }
    const out = {};
    for (const key of TOGGLE_KEYS) {
      const def = DEFAULT_OPTIONS[key];
      out[key] = migrated[key] === true ? true : migrated[key] === false ? false : (
        /** @type {boolean} */
        def
      );
    }
    for (const key of STRING_KEYS) {
      const raw2 = migrated[key];
      out[key] = typeof raw2 === "string" ? raw2.slice(0, 60) : "";
    }
    for (const key of TUNED_KEYS) {
      const def = (
        /** @type {TunedOption} */
        DEFAULT_OPTIONS[key]
      );
      const entry = migrated[key];
      if (entry && typeof entry === "object") {
        const obj = (
          /** @type {Record<string, unknown>} */
          entry
        );
        let value = finiteNumber(obj.value, def.value);
        if (key === "collapsedSidebarWidth") {
          value = Math.max(MIN_COLLAPSED_SIDEBAR_WIDTH, value);
        }
        out[key] = {
          enabled: obj.enabled === true,
          value
        };
      } else {
        out[key] = { enabled: false, value: def.value };
      }
    }
    return (
      /** @type {SidebarTweaksOptions} */
      out
    );
  }
  __name(normalizeOptions, "normalizeOptions");
  function finiteNumber(value, fallback) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  __name(finiteNumber, "finiteNumber");
  function hideSidebarGuid(lines, scope, guid) {
    lines.push(`${scope} ${SIDEBAR_SCOPE} [data-guid="${guid}"] { display: none !important; }`);
  }
  __name(hideSidebarGuid, "hideSidebarGuid");
  function buildTweaksCSS(options) {
    const scope = `html:not(.vibe-shift) body.${BODY_SCOPE_CLASS}`;
    const lines = [];
    if (options.hideCollections) {
      emitCollectionsHeaderHide(lines, scope);
      lines.push(
        `${scope} .sidebar--icons .sidebar-item-collection:not([data-guid^="trashed-"]) {`,
        `display: none !important;`,
        `}`
      );
    } else if (options.hideCollectionsHeader) {
      emitHideCollectionsHeaderRules(lines, scope);
    }
    if (options.hideTags) {
      lines.push(
        `${scope} .sidebar--icons [data-guid="id-hdr-tags"],`,
        `${scope} .sidebar--icons [${TAG_ROW_ATTR}="1"] {`,
        `display: none !important;`,
        `}`
      );
    }
    if (options.hideTrash) {
      lines.push(
        `${scope} .sidebar--icons [data-guid="id-hdr-trash"],`,
        `${scope} .sidebar--icons .sidebar-item-collection[data-guid^="trashed-"] {`,
        `display: none !important;`,
        `}`
      );
    }
    if (options.hideCollapseArrow) {
      lines.push(`${scope} .sidebar .sidebar--toggler { display: none !important; }`);
    }
    emitCollapsedTogglerRules(lines, scope, options);
    if (options.hideJump) hideSidebarGuid(lines, scope, "id-jump");
    if (options.hideSearch) {
      hideSidebarGuid(lines, scope, "id-search");
      hideSidebarGuid(lines, scope, "id-search-collapsed");
    }
    if (options.hideWorkspaceSwitcher) {
      lines.push(`${scope} .sidebar [data-guid="${WORKSPACE_PICKER_GUID}"] { display: none !important; }`);
    }
    if (options.hideCollapsedChevron) {
      lines.push(`${scope} .sidebar--icons .sidebar-item-toggler.collapsed-only { display: none !important; }`);
    } else if (tunedEnabled(options.chevronOffset)) {
      const dx = tunedValue(options.chevronOffset);
      lines.push(`${scope} .sidebar--icons .sidebar-item-toggler.collapsed-only { transform: translateX(${dx}px) !important; }`);
    }
    if (options.fixPanelAnimation) {
      lines.push(
        `${scope} .panel-h-sizer {`,
        `background: none !important;`,
        `border: none !important;`,
        `border-left: none !important;`,
        `box-shadow: none !important;`,
        `pointer-events: auto;`,
        `z-index: 2;`,
        `}`
        // Intentionally NO permanent `.sidebar { z-index }` — that buried menus.
      );
    }
    emitHideSidebarScrollbarRules(lines, scope, options);
    lines.push(
      ...OVERLAY_STACK_SELECTORS.map((sel, i) => `${scope} ${sel}${i < OVERLAY_STACK_SELECTORS.length - 1 ? "," : " {"}`),
      `z-index: ${OVERLAY_STACK_Z_INDEX} !important;`,
      `}`
    );
    emitLockAvatarRules(lines, scope, options);
    emitTunedPx(lines, options.contextMenuWidth, `${scope} .cmdpal--inline.animate-open.active.focused-component { width: VALUEpx !important; }`);
    if (tunedEnabled(options.collapsedSidebarWidth)) {
      const w = Math.max(MIN_COLLAPSED_SIDEBAR_WIDTH, tunedValue(options.collapsedSidebarWidth));
      lines.push(
        // The sidebar lives in the FIRST track of `.panels-grid-sidebar`
        // (columns: [sidebar][sidebar resize handle][panels]). Its width comes
        // from an inline `--sidebar-width` Thymer sets per collapse state (~62px
        // collapsed). The `.sidebar-collapsed` class sits on the INNER `.sidebar`,
        // not on the grid, so match the grid via `:has()`. Overriding
        // `grid-template-columns` is authoritative: it shrinks the track so the
        // sidebar resize handle (grid-column 2) and the panels hug the sidebar's
        // right edge with no gap. Pure CSS — no JS geometry sync needed.
        `${scope} .panels-grid-sidebar:has(.sidebar.sidebar-collapsed) {`,
        `--sidebar-width: ${w}px !important;`,
        `--sidebar-collapsed-width: ${w}px !important;`,
        `grid-template-columns: ${w}px auto 1fr !important;`,
        `}`,
        // Force the sidebar element to the same width — its inline width is the
        // untuned collapsed default, so it must be pinned to fill the shrunk track.
        `${scope} .sidebar.sidebar-collapsed,`,
        `${scope} .panels-grid-sidebar:has(.sidebar.sidebar-collapsed) .sidebar {`,
        `width: ${w}px !important;`,
        `min-width: ${w}px !important;`,
        `max-width: ${w}px !important;`,
        `}`,
        // The overlay vertical scrollbar (.vscrollbar) spans the narrow collapsed
        // body ON TOP of the icon column (z-index:2, pointer-events:auto), so a
        // click at an icon's center hits the scrollbar, not the icon — the icons
        // feel dead. Let clicks fall through to the rows underneath. Wheel scroll
        // is unaffected; a collapsed rail rarely needs scrollbar-drag.
        `${scope} .sidebar.sidebar-collapsed .vscrollbar {`,
        `pointer-events: none !important;`,
        `}`
      );
    }
    if (tunedEnabled(options.expandedSidebarWidth)) {
      const w = tunedValue(options.expandedSidebarWidth);
      lines.push(`${scope} { --sidebar-width: ${w}px !important; }`);
    }
    emitCollectionRowGapRules(lines, scope, options);
    emitCollectionRowHeightRules(lines, scope, options);
    if (options.hideCollectionOptionMenus) {
      lines.push(`${scope} .sidebar--icons .sidebar-item-hover-only.is-option-menu { display: none !important; }`);
    }
    emitPinTagsRules(lines, scope, options);
    return lines.join("\n");
  }
  __name(buildTweaksCSS, "buildTweaksCSS");
  function emitHideSidebarScrollbarRules(lines, scope, options) {
    if (!options.hideSidebarScrollbar) return;
    const sidebar = `${scope} .sidebar`;
    const pinnedScroll = `${sidebar} .${COLLECTIONS_SCROLL_CLASS}`;
    lines.push(
      `${pinnedScroll} {`,
      `scrollbar-width: none !important;`,
      `-ms-overflow-style: none !important;`,
      `}`,
      `${pinnedScroll}::-webkit-scrollbar {`,
      `display: none !important;`,
      `width: 0 !important;`,
      `height: 0 !important;`,
      `}`,
      // Nested Thymer thumb only — never `.vscrollbar` (may wrap collection rows).
      `${pinnedScroll} .scrollbar-thumb {`,
      `opacity: 0 !important;`,
      `visibility: hidden !important;`,
      `pointer-events: none !important;`,
      `}`
    );
    const defaultScroll = `${sidebar} .scrollbar`;
    lines.push(
      `${defaultScroll} {`,
      `scrollbar-width: none !important;`,
      `-ms-overflow-style: none !important;`,
      `}`,
      `${defaultScroll}::-webkit-scrollbar {`,
      `display: none !important;`,
      `width: 0 !important;`,
      `height: 0 !important;`,
      `}`,
      `${defaultScroll} .scrollbar-thumb {`,
      `opacity: 0 !important;`,
      `visibility: hidden !important;`,
      `pointer-events: none !important;`,
      `}`
    );
    const collapsedSidebar = [
      `${sidebar}.sidebar-collapsed`,
      `${sidebar} .sidebar-collapsed`
    ].join(",\n");
    lines.push(
      `${collapsedSidebar} .vscrollbar,`,
      `${collapsedSidebar} .scrollbar-thumb {`,
      `opacity: 0 !important;`,
      `visibility: hidden !important;`,
      `pointer-events: none !important;`,
      `}`
    );
  }
  __name(emitHideSidebarScrollbarRules, "emitHideSidebarScrollbarRules");
  function emitCollectionsHeaderHide(lines, scope) {
    lines.push(
      `${scope} .sidebar--icons [data-guid="${COLLECTIONS_HEADER_GUID}"],`,
      `${scope} .sidebar--icons .sidebar-item-collsheading {`,
      `display: none !important;`,
      `}`
    );
  }
  __name(emitCollectionsHeaderHide, "emitCollectionsHeaderHide");
  function emitHideCollectionsHeaderRules(lines, scope) {
    emitCollectionsHeaderHide(lines, scope);
  }
  __name(emitHideCollectionsHeaderRules, "emitHideCollectionsHeaderRules");
  function emitPinTagsRules(lines, scope, options) {
    if (!options.pinTagsToBottom || options.hideTags) return;
    const parked = `${scope}.${PIN_TAGS_CLASS}.${PIN_TAGS_PARKED_CLASS}`;
    const rail = `${parked} .sidebar:not(.sidebar-collapsed)`;
    const bottomStack = `${rail} .sidebar--icons .${BOTTOM_STACK_CLASS}`;
    lines.push(
      `${rail} {`,
      `display: flex !important;`,
      `flex-direction: column !important;`,
      `min-height: 0 !important;`,
      `height: 100% !important;`,
      `}`,
      `${rail} .sidebar--body {`,
      `flex: 1 1 auto !important;`,
      `min-height: 0 !important;`,
      `display: flex !important;`,
      `flex-direction: column !important;`,
      `overflow: hidden !important;`,
      `}`,
      `${rail} .sidebar--icons {`,
      `flex: 1 1 auto !important;`,
      `min-height: 0 !important;`,
      `display: flex !important;`,
      `flex-direction: column !important;`,
      `overflow: hidden !important;`,
      `}`,
      `${rail} .sidebar--icons .${COLLECTIONS_SCROLL_CLASS} {`,
      `flex: 1 1 auto !important;`,
      `min-height: 0 !important;`,
      `overflow-y: auto !important;`,
      `overflow-x: hidden !important;`,
      `}`,
      `${bottomStack} {`,
      `display: flex !important;`,
      `flex-direction: column !important;`,
      `flex-shrink: 0 !important;`,
      `margin-top: auto !important;`,
      `}`
    );
  }
  __name(emitPinTagsRules, "emitPinTagsRules");
  function emitCollectionRowGapRules(lines, scope, options) {
    if (!tunedEnabled(options.collectionRowGap)) return;
    const gap = tunedValue(options.collectionRowGap);
    const collRow = `.sidebar-item-collection:not([${SEPARATOR_ROW_ATTR}="1"])`;
    const icons = `${scope} .sidebar--icons`;
    lines.push(
      `${icons} .sidebar-item:has(+ ${collRow}) {`,
      `margin-bottom: ${gap}px !important;`,
      `}`,
      `${icons} ${collRow} + ${collRow} {`,
      `margin-top: ${gap}px !important;`,
      `}`
    );
  }
  __name(emitCollectionRowGapRules, "emitCollectionRowGapRules");
  function emitCollectionRowHeightRules(lines, scope, options) {
    if (!tunedEnabled(options.collectionRowHeight)) return;
    const h2 = Math.max(20, tunedValue(options.collectionRowHeight));
    const rowSel = `${scope} .sidebar:not(.sidebar-collapsed) .sidebar--icons .sidebar-item-collection:not([${SEPARATOR_ROW_ATTR}="1"])`;
    const actionsSel = `${rowSel} > div[style*="flex"]`;
    lines.push(
      `${rowSel} {`,
      `display: flex !important;`,
      `align-items: center !important;`,
      `box-sizing: border-box !important;`,
      `min-height: ${h2}px !important;`,
      `}`,
      `${rowSel} .sidebar-item-icon {`,
      `flex-shrink: 0 !important;`,
      `}`,
      `${rowSel} .sidebar-item-label,`,
      `${rowSel} .sidebar-item-name,`,
      `${rowSel} .sidebar-item-title {`,
      `flex: 1 1 auto !important;`,
      `min-width: 0 !important;`,
      `line-height: 1.25 !important;`,
      `}`,
      `${rowSel} .hover-button:not(.is-option-menu) {`,
      `box-sizing: border-box !important;`,
      `flex: 0 0 18px !important;`,
      `width: 18px !important;`,
      `height: 18px !important;`,
      `min-height: 18px !important;`,
      `padding: 0 !important;`,
      `display: inline-flex !important;`,
      `align-items: center !important;`,
      `justify-content: center !important;`,
      `}`,
      `${actionsSel} {`,
      `display: flex !important;`,
      `align-items: center !important;`,
      `flex: 0 0 auto !important;`,
      `min-width: 36px !important;`,
      `min-height: 18px !important;`,
      `justify-content: flex-end !important;`,
      `}`,
      `${actionsSel}:not(:has(.ti-plus))::after {`,
      `content: '' !important;`,
      `flex: 0 0 18px !important;`,
      `width: 18px !important;`,
      `height: 18px !important;`,
      `}`,
      `${rowSel} .sidebar-item-hover-only.is-option-menu {`,
      `flex: 0 0 18px !important;`,
      `width: 18px !important;`,
      `min-height: 18px !important;`,
      `}`
    );
  }
  __name(emitCollectionRowHeightRules, "emitCollectionRowHeightRules");
  var AVATAR_ROW_INSET = 10;
  var AVATAR_ROW_HEIGHT = 41;
  function emitLockAvatarRules(lines, scope, options) {
    if (!tunedEnabled(options.lockAvatarPosition)) return;
    const top = tunedValue(options.lockAvatarPosition);
    lines.push(`${scope} .sidebar { padding-top: 0 !important; }`);
    if (options.hideWorkspaceSwitcher) {
      lines.push(`${scope} .sidebar--top { padding-top: ${top}px !important; }`);
      return;
    }
    const guid = WORKSPACE_PICKER_GUID;
    const rowBase = `${scope} .sidebar [data-guid="${guid}"].sidebar-item`;
    const rowExpanded = `${scope} .sidebar:not(.sidebar-collapsed) [data-guid="${guid}"].sidebar-item`;
    const rowCollapsed = `${scope} .sidebar.sidebar-collapsed [data-guid="${guid}"].sidebar-item`;
    lines.push(
      // Pin the avatar row to `.sidebar` (its left edge never moves — only the width
      // animates), DECOUPLING it from the reflow that glitches it. Keep the row's
      // NATURAL padding (so the pill keeps its default size/breathing room). At
      // `left:10` the content lands at x=15 (the measured default edge).
      `${scope} .sidebar { position: relative !important; }`,
      `${rowBase} {`,
      `position: absolute !important;`,
      `top: ${top}px !important;`,
      `left: ${AVATAR_ROW_INSET}px !important;`,
      `margin: 0 !important;`,
      `z-index: 1 !important;`,
      // Freeze EVERY animation channel on the row. Thymer animates sidebar chrome
      // during collapse/expand (transient translateX); the pinned row must never
      // ride one of those or it visibly flies left before snapping back to left:10.
      `transition: none !important;`,
      `transform: none !important;`,
      `animation: none !important;`,
      `}`,
      `${rowBase} * {`,
      `transition: none !important;`,
      `transform: none !important;`,
      `animation: none !important;`,
      `}`,
      // Expanded: stretch to fill the sidebar like Thymer's default pill.
      `${rowExpanded} { right: ${AVATAR_ROW_INSET}px !important; width: auto !important; }`,
      // Collapsed: content-width so the avatar stays its natural size, centered at x=15.
      `${rowCollapsed} { right: auto !important; width: auto !important; }`,
      // Reserve the row's slot so removing it from flow doesn't lift the collections.
      // transform:none matters twice over: a transformed .sidebar--top would (a) slide
      // the row with it during Thymer's toggle animation and (b) BECOME the row's
      // containing block (transforms create one), re-anchoring left:10 mid-flight.
      `${scope} .sidebar--top {`,
      `padding-top: ${top + AVATAR_ROW_HEIGHT}px !important;`,
      `transform: none !important;`,
      `}`,
      // The pin is only as stable as its containing-block CHAIN. Thymer's toggle
      // animation can transform the sidebar containers themselves; any transient
      // translateX there carries the pinned row (most visibly the avatar)
      // off-screen left before the animation settles. Freeze the whole chain
      // while the lock is on.
      `${scope} .sidebar,`,
      `${scope} .panels-grid-sidebar {`,
      `transform: none !important;`,
      `}`
    );
  }
  __name(emitLockAvatarRules, "emitLockAvatarRules");
  var COLLAPSED_TOGGLER_SELECTORS = /* @__PURE__ */ __name((scope) => [
    `${scope} .sidebar.sidebar-collapsed .sidebar--toggler`,
    `${scope} .sidebar-collapsed .sidebar .sidebar--toggler`
  ].join(",\n"), "COLLAPSED_TOGGLER_SELECTORS");
  function emitCollapsedTogglerRules(lines, scope, options) {
    if (options.hideCollapseArrow) return;
    if (!tunedEnabled(options.collapsedSidebarWidth)) return;
    const sel = COLLAPSED_TOGGLER_SELECTORS(scope);
    const sidebarSel = [
      `${scope} .sidebar.sidebar-collapsed`,
      `${scope} .panels-grid-sidebar.sidebar-collapsed .sidebar`
    ].join(",\n");
    lines.push(
      `${sidebarSel} {`,
      `position: relative;`,
      `}`,
      `${sel} {`,
      `position: absolute;`,
      // Center the arrow ON the sidebar's right edge (the divider), so it reads as
      // aligned to the boundary rather than floating out in the panel. The icon
      // column is at the TOP and clicks there are already unblocked (scrollbar fix),
      // and this button sits at the sidebar's vertical middle — clear of every row.
      // Do NOT constrain width — the toggler is a border-radius:50% circle sized by
      // Thymer; forcing a width different from its height renders it as an ellipse.
      `left: 100% !important;`,
      `right: auto !important;`,
      `transform: translateX(-50%) !important;`,
      `z-index: 3;`,
      `pointer-events: auto !important;`,
      `overflow: visible;`,
      `}`
    );
  }
  __name(emitCollapsedTogglerRules, "emitCollapsedTogglerRules");
  function tunedEnabled(entry) {
    return !!(entry && typeof entry === "object" && entry.enabled);
  }
  __name(tunedEnabled, "tunedEnabled");
  function tunedValue(entry) {
    if (!entry || typeof entry !== "object") return 0;
    return finiteNumber(entry.value, 0);
  }
  __name(tunedValue, "tunedValue");
  function emitTunedPx(lines, entry, rule) {
    if (!tunedEnabled(entry)) return;
    lines.push(rule.replace(/VALUE/g, String(tunedValue(entry))));
  }
  __name(emitTunedPx, "emitTunedPx");
  var COLLECTION_ROW_SELECTOR = '.sidebar-item-collection:not([data-guid^="trashed-"])';
  function isTagsSectionExpanded(iconsRoot) {
    if (!(iconsRoot instanceof HTMLElement)) return false;
    const header = iconsRoot.querySelector(`[data-guid="${TAGS_HEADER_GUID}"]`);
    if (!(header instanceof HTMLElement)) return false;
    if (header.querySelector(".ti-chevron-down")) return true;
    if (header.querySelector(".ti-chevron-right")) return false;
    let cur = header.nextElementSibling;
    while (cur instanceof HTMLElement) {
      const guid = cur.getAttribute("data-guid");
      if (guid === COLLECTIONS_HEADER_GUID || guid === "id-hdr-trash") break;
      if (cur.classList.contains("sidebar-item-collection")) break;
      if (cur.classList.contains("sidebar-item-collsheading")) break;
      if (cur.getAttribute(TAG_ROW_ATTR) === "1" || cur.classList.contains("scal-root")) {
        try {
          const cs = getComputedStyle(cur);
          return cs.display !== "none" && cs.visibility !== "hidden";
        } catch {
          return true;
        }
      }
      cur = cur.nextElementSibling;
    }
    return false;
  }
  __name(isTagsSectionExpanded, "isTagsSectionExpanded");
  function isCollectionsSectionExpanded(iconsRoot) {
    if (!(iconsRoot instanceof HTMLElement)) return true;
    const header = iconsRoot.querySelector(`[data-guid="${COLLECTIONS_HEADER_GUID}"]`);
    if (!(header instanceof HTMLElement)) return true;
    if (header.querySelector(".ti-chevron-down")) return true;
    if (header.querySelector(".ti-chevron-right")) return false;
    return true;
  }
  __name(isCollectionsSectionExpanded, "isCollectionsSectionExpanded");
  function clearCollectionRowForce(iconsRoot) {
    iconsRoot.removeAttribute(COLL_RESTORED_ATTR);
  }
  __name(clearCollectionRowForce, "clearCollectionRowForce");
  function prepareCollectionRowsForTagsExpand() {
    for (const root of document.querySelectorAll(".sidebar--icons")) {
      if (root instanceof HTMLElement) clearCollectionRowForce(root);
    }
  }
  __name(prepareCollectionRowsForTagsExpand, "prepareCollectionRowsForTagsExpand");
  function restoreCollectionRows(iconsRoot) {
    if (!(iconsRoot instanceof HTMLElement)) return;
    if (isTagsSectionExpanded(iconsRoot)) {
      clearCollectionRowForce(iconsRoot);
      return;
    }
    if (!isCollectionsSectionExpanded(iconsRoot) && iconsRoot.getAttribute(COLL_RESTORED_ATTR) !== "1") {
      const hdr = iconsRoot.querySelector(`[data-guid="${COLLECTIONS_HEADER_GUID}"]`);
      if (hdr instanceof HTMLElement) {
        try {
          hdr.click();
        } catch {
        }
      }
    }
    iconsRoot.setAttribute(COLL_RESTORED_ATTR, "1");
    for (const node of iconsRoot.querySelectorAll(COLLECTION_ROW_SELECTOR)) {
      if (!(node instanceof HTMLElement)) continue;
      if (node.style.getPropertyValue("display") === "none") {
        node.style.removeProperty("display");
      }
      if (node.style.getPropertyValue("visibility") === "hidden") {
        node.style.removeProperty("visibility");
      }
    }
  }
  __name(restoreCollectionRows, "restoreCollectionRows");
  function syncCollectionRowsAfterTags(iconsRoot) {
    const roots = iconsRoot instanceof HTMLElement ? [iconsRoot] : [...document.querySelectorAll(".sidebar--icons")].filter((r) => r instanceof HTMLElement);
    for (const root of roots) {
      if (isTagsSectionExpanded(root)) continue;
      restoreCollectionRows(root);
    }
  }
  __name(syncCollectionRowsAfterTags, "syncCollectionRowsAfterTags");
  function unparkPinTagsBeforeExpand(iconsRoot) {
    if (!(iconsRoot instanceof HTMLElement)) return;
    unwrapPinTagsLayout(iconsRoot);
    document.body.classList.remove(PIN_TAGS_PARKED_CLASS);
  }
  __name(unparkPinTagsBeforeExpand, "unparkPinTagsBeforeExpand");
  function syncPinTagsLayout(active) {
    let parked = false;
    for (const icons of document.querySelectorAll(".sidebar--icons")) {
      if (!(icons instanceof HTMLElement)) continue;
      if (!active) {
        unwrapPinTagsLayout(icons);
        continue;
      }
      const sidebar = icons.closest(".sidebar");
      if (sidebar instanceof HTMLElement && sidebar.classList.contains("sidebar-collapsed")) {
        unwrapPinTagsLayout(icons);
        continue;
      }
      const tagsHdr = icons.querySelector(`[data-guid="${TAGS_HEADER_GUID}"]`);
      if (!(tagsHdr instanceof HTMLElement)) {
        unwrapPinTagsLayout(icons);
        continue;
      }
      if (isTagsSectionExpanded(icons)) {
        unwrapPinTagsLayout(icons);
        continue;
      }
      parked = true;
      parkPinTagsLayout(icons, tagsHdr);
    }
    document.body.classList.toggle(PIN_TAGS_PARKED_CLASS, active && parked);
  }
  __name(syncPinTagsLayout, "syncPinTagsLayout");
  function parkPinTagsLayout(icons, tagsHdr) {
    let stack = icons.querySelector(`:scope > .${BOTTOM_STACK_CLASS}`);
    if (!(stack instanceof HTMLElement)) {
      stack = document.createElement("div");
      stack.className = BOTTOM_STACK_CLASS;
      icons.insertBefore(stack, tagsHdr);
    }
    if (tagsHdr.parentElement !== stack) stack.appendChild(tagsHdr);
    let scroll = icons.querySelector(`:scope > .${COLLECTIONS_SCROLL_CLASS}`);
    if (!(scroll instanceof HTMLElement)) {
      scroll = document.createElement("div");
      scroll.className = COLLECTIONS_SCROLL_CLASS;
      icons.insertBefore(scroll, stack);
    }
    if (scroll.nextElementSibling !== stack) {
      icons.insertBefore(scroll, stack);
    }
    for (const child of [...icons.children]) {
      if (child === scroll || child === stack) continue;
      const guid = child.getAttribute?.("data-guid");
      if (guid === "id-hdr-trash") {
        stack.appendChild(child);
        continue;
      }
      if (child.classList.contains("sidebar-item-collection")) {
        if (guid?.startsWith("trashed-")) {
          stack.appendChild(child);
        } else {
          scroll.appendChild(child);
        }
        continue;
      }
      if (guid === COLLECTIONS_HEADER_GUID || child.classList.contains("sidebar-item-collsheading")) {
        scroll.appendChild(child);
        continue;
      }
      if (child.getAttribute(TAG_ROW_ATTR) === "1" || child.classList.contains("scal-root") || child.classList.contains("sidebar-widget-container")) {
        stack.appendChild(child);
        continue;
      }
      if (child.compareDocumentPosition(stack) & Node.DOCUMENT_POSITION_FOLLOWING) {
        scroll.appendChild(child);
      }
    }
    if (stack.parentElement === icons && stack !== icons.lastElementChild) {
      icons.appendChild(stack);
    }
  }
  __name(parkPinTagsLayout, "parkPinTagsLayout");
  function unwrapBottomStack(icons) {
    const stack = icons.querySelector(`:scope > .${BOTTOM_STACK_CLASS}`);
    if (!(stack instanceof HTMLElement)) return;
    const anchor = stack.nextElementSibling;
    while (stack.firstChild) icons.insertBefore(stack.firstChild, anchor);
    stack.remove();
  }
  __name(unwrapBottomStack, "unwrapBottomStack");
  function unwrapPinTagsLayout(icons) {
    unwrapCollectionsScroll(icons);
    unwrapBottomStack(icons);
  }
  __name(unwrapPinTagsLayout, "unwrapPinTagsLayout");
  function unwrapCollectionsScroll(icons) {
    const scroll = icons.querySelector(`:scope > .${COLLECTIONS_SCROLL_CLASS}`);
    if (!(scroll instanceof HTMLElement)) return;
    const anchor = scroll.nextElementSibling;
    while (scroll.firstChild) icons.insertBefore(scroll.firstChild, anchor);
    scroll.remove();
  }
  __name(unwrapCollectionsScroll, "unwrapCollectionsScroll");
  function clearPinTagsLayout() {
    for (const icons of document.querySelectorAll(".sidebar--icons")) {
      if (icons instanceof HTMLElement) unwrapPinTagsLayout(icons);
    }
  }
  __name(clearPinTagsLayout, "clearPinTagsLayout");
  function markTagRows() {
    document.querySelectorAll(`.sidebar--icons [${TAG_ROW_ATTR}]`).forEach((node) => {
      node.removeAttribute(TAG_ROW_ATTR);
    });
    for (const root of document.querySelectorAll(".sidebar--icons")) {
      if (!(root instanceof HTMLElement)) continue;
      const header = root.querySelector('[data-guid="id-hdr-tags"]');
      if (!(header instanceof HTMLElement)) continue;
      let cur = header.nextElementSibling;
      while (cur instanceof HTMLElement) {
        const guid = cur.getAttribute("data-guid");
        if (guid === "id-hdr-collections" || guid === "id-hdr-trash") break;
        if (cur.classList.contains("sidebar-item-collection")) break;
        if (cur.classList.contains("sidebar-item-collsheading")) break;
        if (cur.classList.contains("sidebar-item-heading") && guid !== "id-hdr-tags") break;
        if (cur.classList.contains("sidebar-item")) {
          cur.setAttribute(TAG_ROW_ATTR, "1");
        }
        if (cur.classList.contains("scal-root") || cur.classList.contains("sidebar-widget-container")) {
          cur.setAttribute(TAG_ROW_ATTR, "1");
        }
        cur = cur.nextElementSibling;
      }
    }
  }
  __name(markTagRows, "markTagRows");

  // plugin.js
  var ROOT_CLASS = "plg-sidebar-tweaks";
  var PANEL_TYPE = "sidebar-tweaks-settings";
  var PLUGIN_VERSION = "1.0.4";
  var OPTIONS_STORAGE_PREFIX = "sidebar-tweaks/";
  var RENAME_INPUT_CSS = `
.${ROOT_CLASS}-panel .tps-opt--text {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	cursor: default;
}
.${ROOT_CLASS}-panel .tps-opt--text .tps-opt-label { flex: 0 0 auto; }
.${ROOT_CLASS}-panel .tps-text-input {
	flex: 1 1 auto;
	min-width: 0;
	max-width: 220px;
	padding: 5px 8px;
	font: inherit;
	color: var(--text-default, inherit);
	background: var(--bg-default, rgba(127,127,127,0.06));
	border: 1px solid var(--border-default, rgba(127,127,127,0.22));
	border-radius: var(--tps-radius, 6px);
	outline: none;
}
.${ROOT_CLASS}-panel .tps-text-input:focus {
	border-color: var(--tps-accent, var(--accent-color, currentColor));
}
.${ROOT_CLASS}-panel .tps-text-input::placeholder { color: var(--text-muted, rgba(127,127,127,0.6)); }
`;
  var SIDEBAR_CHROME_SELECTOR = ".sidebar--top, .sidebar--body, .sidebar--icons";
  var NON_EMPTY_SELECTOR = [
    ".sidebar--toggler",
    ".sidebar-item",
    ".sidebar-item-collection",
    ".sidebar-item-heading",
    ".sidebar-item-collsheading",
    ".sidebar-widget-container",
    ".scrollbar",
    ".vscrollbar",
    ".scrollbar-thumb",
    "a",
    "button",
    "input",
    "textarea",
    "select",
    "label",
    "summary",
    "[event]",
    '[draggable="true"]',
    '[contenteditable="true"]',
    '[role="button"]',
    ".button-none",
    ".button-small",
    ".button-normal-hover",
    ".clickable",
    ".cursor-pointer",
    ".hover-button"
  ].join(",");
  var COLLAPSED_INTERACTIVE_SELECTOR = [
    // A collapsed rail's rows ARE just the icon — the whole hoverable row navigates,
    // so treat any hoverable row as interactive (a click on it must not toggle).
    ".sidebar-item-hoverable",
    ".sidebar-item-icon",
    ".sidebar-item-name",
    ".sidebar-item-title",
    ".sidebar-item-text",
    ".sidebar-item-hover-only",
    ".sidebar-item-heading",
    ".sidebar-item-collsheading",
    ".scal-root",
    ".sidebar-widget",
    "a",
    "button",
    "input",
    "textarea",
    "select",
    "label",
    "summary",
    "[event]",
    '[draggable="true"]',
    '[contenteditable="true"]',
    '[role="button"]',
    ".button-none",
    ".button-small",
    ".button-normal-hover",
    ".clickable",
    ".cursor-pointer",
    ".hover-button"
  ].join(",");
  var SIDEBAR_SELECTOR = ".sidebar";
  var TOGGLER_SELECTOR = ".sidebar--toggler";
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    /** @type {SidebarTweaksOptions} */
    _options = normalizeOptions(null);
    /** @type {HTMLElement | null} */
    _panelEl = null;
    /** @type {import('../../.sdk/types').StatusBarItem | null} */
    _statusItem = null;
    /** @type {import('../../.sdk/types').CommandPaletteCommand | null} */
    _commandItem = null;
    /** @type {MutationObserver | null} */
    _observer = null;
    /** @type {EventListener | null} */
    _boundClick = null;
    /** @type {EventListener | null} */
    _boundMouseMove = null;
    /** @type {HTMLElement | null} */
    _hoverSurface = null;
    /** @type {boolean} */
    _toggleLock = false;
    /** @type {boolean} */
    _configSaveDirty = false;
    /** @type {boolean} */
    _configSaveInFlight = false;
    /** @type {boolean} */
    _configSaveQueued = false;
    /** @type {number} */
    _tagsSidebarTransitionLock = 0;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _collRestoreTimer = null;
    /** @type {boolean} */
    _isUnloading = false;
    /** @type {string[]} */
    _handlerIds = [];
    /** @type {EventListener} */
    _pageLifecycleListener = /* @__PURE__ */ __name(() => {
    }, "_pageLifecycleListener");
    /** @type {EventListener} */
    _visibilityListener = /* @__PURE__ */ __name(() => {
    }, "_visibilityListener");
    /** @type {Record<string, string>} Original heading text, captured before renaming. */
    _originalHeadingText = {};
    /** @type {MutationObserver | null} */
    _avatarGuardObserver = null;
    /** @type {number} */
    _avatarGuardRaf = 0;
    /** @type {number} */
    _avatarGuardUntil = 0;
    /** @type {EventListener | null} */
    _boundTagsHeaderClick = null;
    onLoad() {
      pingInstall("sidebar-tweaks");
      pingActive("sidebar-tweaks");
      void syncPluginVersionOnLoad(this, PLUGIN_VERSION);
      this._options = this._loadOptions();
      document.body.classList.add(BODY_SCOPE_CLASS);
      this.ui.injectCSS(PANEL_CSS);
      this.ui.injectCSS(RENAME_INPUT_CSS);
      this._statusItem = this.ui.addStatusBarItem({
        icon: "layout-dashboard",
        tooltip: "Sidebar Tweaks",
        onClick: /* @__PURE__ */ __name(() => {
        }, "onClick")
      });
      const triggerEl = this._statusItem && this._statusItem.getElement && this._statusItem.getElement();
      if (triggerEl) {
        triggerEl.addEventListener("click", (e) => {
          e.stopPropagation();
          e.preventDefault();
          void this._openPanel();
        }, true);
      }
      this._commandItem = this.ui.addCommandPaletteCommand({
        label: "Plugin: Sidebar Tweaks",
        icon: "layout-dashboard",
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle("Sidebar Tweaks Settings");
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        this._renderPanel();
      });
      this._observer = new MutationObserver((mutations) => {
        markTagRows();
        this._applyHeadingRenames();
        if (this._hideCollectionsHeaderActive() && !this._tagsSidebarTransitionLock) {
          this._debouncedCollectionRestore();
        }
        if (this._pinTagsActive()) {
          syncPinTagsLayout(true);
        }
        if (this._lockAvatarActive()) {
          for (const m of mutations) {
            const t = m.target;
            if (t instanceof Element && typeof t.closest === "function" && t.closest(".panels-grid-sidebar, .sidebar")) {
              this._startAvatarGuard();
              break;
            }
          }
        }
      });
      if (document.body) {
        this._observer.observe(document.body, { childList: true, subtree: true });
      }
      this._initAvatarGuard();
      this._applyOptions();
      markTagRows();
      this._handlerIds.push(this.events.on("panel.closed", () => this._flushConfigSave()));
      this._pageLifecycleListener = () => this._flushConfigSave();
      this._visibilityListener = () => {
        if (document.visibilityState === "hidden") this._flushConfigSave();
      };
      try {
        window.addEventListener("pagehide", this._pageLifecycleListener);
      } catch {
      }
      try {
        document.addEventListener("visibilitychange", this._visibilityListener);
      } catch {
      }
    }
    /**
     * Whether the avatar lock is active (mirrors emitLockAvatarRules gating).
     */
    _lockAvatarActive() {
      const entry = this._options.lockAvatarPosition;
      const enabled = !!(entry && typeof entry === "object" && entry.enabled);
      return enabled && !this._options.hideWorkspaceSwitcher;
    }
    /**
     * Anti-fly-off guard. CSS `!important` cannot stop Web-Animations-API animations
     * (they outrank the cascade), so when Thymer animates sidebar chrome during a
     * collapse/expand, the pinned avatar row can still ride a transient translateX
     * and fly off-screen left. This watches for sidebar class flips (the toggle
     * moment) and, for the duration of the native animation, cancels any animation
     * targeting the workspace row or `.sidebar--top` and strips inline transforms —
     * so the row always stays exactly at its pinned position.
     */
    _initAvatarGuard() {
      this._avatarGuardObserver = new MutationObserver((mutations) => {
        if (!this._lockAvatarActive()) return;
        for (const m of mutations) {
          const t = m.target;
          if (t instanceof HTMLElement && (t.classList.contains("sidebar") || t.classList.contains("panels-grid-sidebar"))) {
            this._startAvatarGuard();
            return;
          }
        }
      });
      if (document.body) {
        this._avatarGuardObserver.observe(document.body, {
          subtree: true,
          attributes: true,
          attributeFilter: ["class"]
        });
      }
    }
    /** Refresh the guard window (native toggle animation is ~450ms). */
    _startAvatarGuard() {
      this._avatarGuardUntil = performance.now() + 650;
      if (!this._avatarGuardRaf) this._runAvatarGuard();
    }
    _runAvatarGuard() {
      this._avatarGuardRaf = 0;
      if (!this._lockAvatarActive()) return;
      const row = document.querySelector('.sidebar [data-guid="id-workspace"].sidebar-item');
      if (row instanceof HTMLElement) {
        try {
          for (const anim of row.getAnimations({ subtree: true })) anim.cancel();
        } catch {
        }
        row.style.removeProperty("transform");
      }
      for (const sel of [".sidebar--top", ".sidebar", ".panels-grid-sidebar"]) {
        const el = document.querySelector(sel);
        if (el instanceof HTMLElement) {
          try {
            for (const anim of el.getAnimations()) anim.cancel();
          } catch {
          }
          el.style.removeProperty("transform");
        }
      }
      if (performance.now() < this._avatarGuardUntil) {
        this._avatarGuardRaf = requestAnimationFrame(() => this._runAvatarGuard());
      }
    }
    _teardownAvatarGuard() {
      if (this._avatarGuardRaf) {
        cancelAnimationFrame(this._avatarGuardRaf);
        this._avatarGuardRaf = 0;
      }
      if (this._avatarGuardObserver) {
        this._avatarGuardObserver.disconnect();
        this._avatarGuardObserver = null;
      }
    }
    onUnload() {
      this._isUnloading = true;
      this._flushConfigSave();
      this._teardownAvatarGuard();
      this._restoreHeadingRenames();
      this._detachHideCollectionsHeaderListener();
      this._detachPinTagsListener();
      clearPinTagsLayout();
      document.body.classList.remove(
        BODY_SCOPE_CLASS,
        PIN_TAGS_CLASS,
        PIN_TAGS_PARKED_CLASS,
        HIDE_COLLS_HDR_CLASS
      );
      this._detachEmptyClickListeners();
      this._clearHoverCursor();
      for (const id of this._handlerIds) {
        try {
          this.events.off(id);
        } catch {
        }
      }
      this._handlerIds = [];
      try {
        window.removeEventListener("pagehide", this._pageLifecycleListener);
      } catch {
      }
      try {
        document.removeEventListener("visibilitychange", this._visibilityListener);
      } catch {
      }
      if (this._observer) {
        this._observer.disconnect();
        this._observer = null;
      }
      if (this._statusItem) {
        this._statusItem.remove();
        this._statusItem = null;
      }
      if (this._commandItem) {
        this._commandItem.remove();
        this._commandItem = null;
      }
      this._removeTweaksStyle();
      document.querySelectorAll(`.sidebar--icons [${TAG_ROW_ATTR}]`).forEach((node) => {
        node.removeAttribute(TAG_ROW_ATTR);
      });
    }
    /** @returns {SidebarTweaksOptions} */
    _loadOptions() {
      const stored = this._readStoredOptions();
      const custom = this._customConfig().options;
      return normalizeOptions({ ...stored || {}, ...custom || {} });
    }
    _optionsStorageKey() {
      const ws = typeof this.getWorkspaceGuid === "function" ? this.getWorkspaceGuid() : "default";
      return `${OPTIONS_STORAGE_PREFIX}${ws}/options`;
    }
    /** @returns {Record<string, unknown> | null} */
    _readStoredOptions() {
      try {
        const raw = localStorage.getItem(this._optionsStorageKey());
        if (raw) return JSON.parse(raw);
      } catch {
      }
      return null;
    }
    /** @param {SidebarTweaksOptions} options */
    _writeStoredOptions(options) {
      try {
        localStorage.setItem(this._optionsStorageKey(), JSON.stringify(options));
      } catch {
      }
    }
    _persistOptions() {
      this._options = normalizeOptions(this._options);
      this._writeStoredOptions(this._options);
      this._configSaveDirty = true;
    }
    _flushConfigSave() {
      if (this._configSaveDirty) void this._saveOptionsNow();
    }
    /** @returns {Record<string, unknown>} */
    _customConfig() {
      try {
        const conf = this.getConfiguration && this.getConfiguration();
        const custom = conf && conf.custom;
        return custom && typeof custom === "object" ? (
          /** @type {Record<string, unknown>} */
          custom
        ) : {};
      } catch {
        return {};
      }
    }
    _applyOptions() {
      this._syncTweaksStyle();
      this._syncEmptyClickListeners();
      this._syncHideCollectionsHeaderBehavior();
      this._syncPinTagsBehavior();
      this._applyHeadingRenames();
      markTagRows();
      if (this._hideCollectionsHeaderActive()) {
        for (const root of document.querySelectorAll(".sidebar--icons")) {
          if (root instanceof HTMLElement && !isTagsSectionExpanded(root)) {
            syncCollectionRowsAfterTags(root);
          }
        }
      }
    }
    _pinTagsActive() {
      return !!this._options.pinTagsToBottom && !this._options.hideTags;
    }
    _syncPinTagsBehavior() {
      const active = this._pinTagsActive();
      document.body.classList.toggle(PIN_TAGS_CLASS, active);
      if (active) {
        syncPinTagsLayout(true);
      } else {
        document.body.classList.remove(PIN_TAGS_PARKED_CLASS);
        syncPinTagsLayout(false);
      }
      this._syncTagsHeaderListener();
    }
    /**
     * Hide Collections heading only — collection rows must return when Tags closes
     * because the hidden header can no longer be clicked to re-expand them.
     */
    _hideCollectionsHeaderActive() {
      return !!this._options.hideCollectionsHeader && !this._options.hideCollections;
    }
    _syncHideCollectionsHeaderBehavior() {
      document.body.classList.toggle(HIDE_COLLS_HDR_CLASS, this._hideCollectionsHeaderActive());
      if (!this._hideCollectionsHeaderActive()) {
        this._detachTagsHeaderListener();
      }
      this._syncTagsHeaderListener();
    }
    _syncTagsHeaderListener() {
      if (this._hideCollectionsHeaderActive() || this._pinTagsActive()) {
        this._attachTagsHeaderListener();
        return;
      }
      this._detachTagsHeaderListener();
    }
    _attachTagsHeaderListener() {
      if (this._boundTagsHeaderClick) return;
      this._boundTagsHeaderClick = (ev) => {
        if (!(ev.target instanceof Element)) return;
        const header = ev.target.closest(`[data-guid="${TAGS_HEADER_GUID}"]`);
        if (!header) return;
        const icons = header.closest(".sidebar--icons");
        if (!(icons instanceof HTMLElement)) return;
        const pinActive = this._pinTagsActive();
        const hideHdrActive = this._hideCollectionsHeaderActive();
        if (!pinActive && !hideHdrActive) return;
        const wasExpanded = isTagsSectionExpanded(icons);
        if (pinActive && !wasExpanded) {
          unparkPinTagsBeforeExpand(icons);
        }
        this._tagsSidebarTransitionLock = 1;
        window.setTimeout(() => {
          this._tagsSidebarTransitionLock = 0;
          if (pinActive) syncPinTagsLayout(true);
          if (hideHdrActive && icons.isConnected && !isTagsSectionExpanded(icons)) {
            syncCollectionRowsAfterTags(icons);
          }
        }, 450);
        const repark = /* @__PURE__ */ __name(() => {
          if (pinActive) syncPinTagsLayout(true);
        }, "repark");
        window.setTimeout(() => {
          repark();
          if (hideHdrActive) {
            if (wasExpanded) {
              const tryRestore = /* @__PURE__ */ __name(() => {
                if (icons.isConnected && !isTagsSectionExpanded(icons)) {
                  syncCollectionRowsAfterTags(icons);
                }
              }, "tryRestore");
              window.setTimeout(tryRestore, 180);
              window.setTimeout(tryRestore, 400);
            } else {
              const tryPrepare = /* @__PURE__ */ __name(() => {
                if (icons.isConnected && isTagsSectionExpanded(icons)) {
                  prepareCollectionRowsForTagsExpand();
                }
              }, "tryPrepare");
              tryPrepare();
              window.setTimeout(tryPrepare, 120);
            }
          } else if (pinActive && wasExpanded) {
            window.setTimeout(() => {
              if (icons.isConnected && !isTagsSectionExpanded(icons)) repark();
            }, 150);
          }
        }, 80);
      };
      document.addEventListener("click", this._boundTagsHeaderClick, true);
    }
    _detachTagsHeaderListener() {
      if (!this._boundTagsHeaderClick) return;
      document.removeEventListener("click", this._boundTagsHeaderClick, true);
      this._boundTagsHeaderClick = null;
      if (this._collRestoreTimer) {
        clearTimeout(this._collRestoreTimer);
        this._collRestoreTimer = null;
      }
      this._tagsSidebarTransitionLock = 0;
    }
    /** @deprecated alias */
    _detachHideCollectionsHeaderListener() {
      this._detachTagsHeaderListener();
    }
    /** @deprecated alias */
    _detachPinTagsListener() {
      this._detachTagsHeaderListener();
    }
    _debouncedCollectionRestore() {
      if (this._collRestoreTimer) clearTimeout(this._collRestoreTimer);
      this._collRestoreTimer = setTimeout(() => {
        this._collRestoreTimer = null;
        if (!this._hideCollectionsHeaderActive() || this._tagsSidebarTransitionLock) return;
        syncCollectionRowsAfterTags(null);
      }, 500);
    }
    /**
     * Rename the Collections / Tags / Trash sidebar headings. Replaces the text of
     * each heading's `.sidebar-item-label` when a custom name is set, and restores
     * Thymer's original when cleared. Re-applied on every sidebar mutation because
     * Thymer recreates the label nodes on re-render.
     */
    _applyHeadingRenames() {
      for (const [key, guid] of Object.entries(RENAME_GUIDS)) {
        const label = document.querySelector(`.sidebar [data-guid="${guid}"] .sidebar-item-label`);
        if (!(label instanceof HTMLElement)) continue;
        const custom = (
          /** @type {string} */
          (this._options[
            /** @type {keyof typeof this._options} */
            key
          ] || "").trim()
        );
        if (this._originalHeadingText[guid] == null && !custom) {
          continue;
        }
        if (this._originalHeadingText[guid] == null) {
          this._originalHeadingText[guid] = label.textContent || "";
        }
        const target = custom || this._originalHeadingText[guid];
        if (label.textContent !== target) label.textContent = target;
      }
    }
    /** Restore Thymer's original heading labels (used on unload). */
    _restoreHeadingRenames() {
      for (const [, guid] of Object.entries(RENAME_GUIDS)) {
        const original = this._originalHeadingText[guid];
        if (original == null) continue;
        const label = document.querySelector(`.sidebar [data-guid="${guid}"] .sidebar-item-label`);
        if (label instanceof HTMLElement && label.textContent !== original) {
          label.textContent = original;
        }
      }
    }
    _syncTweaksStyle() {
      const css = buildTweaksCSS(this._options);
      let el = document.getElementById(TWEAKS_STYLE_ID);
      if (!css) {
        if (el) el.remove();
        return;
      }
      if (!el) {
        el = document.createElement("style");
        el.id = TWEAKS_STYLE_ID;
        document.head.appendChild(el);
      }
      el.textContent = css;
    }
    _removeTweaksStyle() {
      document.getElementById(TWEAKS_STYLE_ID)?.remove();
    }
    _syncEmptyClickListeners() {
      if (this._options.emptySidebarClick) this._attachEmptyClickListeners();
      else this._detachEmptyClickListeners();
    }
    _attachEmptyClickListeners() {
      if (this._boundClick) return;
      this._boundClick = (ev) => {
        if (ev instanceof MouseEvent) this._onDocumentClick(ev);
      };
      this._boundMouseMove = (ev) => {
        if (ev instanceof MouseEvent) this._onDocumentMouseMove(ev);
      };
      document.addEventListener("click", this._boundClick, true);
      document.addEventListener("mousemove", this._boundMouseMove, true);
    }
    _detachEmptyClickListeners() {
      if (this._boundClick) {
        document.removeEventListener("click", this._boundClick, true);
        this._boundClick = null;
      }
      if (this._boundMouseMove) {
        document.removeEventListener("mousemove", this._boundMouseMove, true);
        this._boundMouseMove = null;
      }
      this._clearHoverCursor();
    }
    /**
     * @param {HTMLElement} sidebar
     */
    _isSidebarCollapsed(sidebar) {
      if (sidebar.classList.contains("sidebar-collapsed")) return true;
      const grid = sidebar.closest(".panels-grid-sidebar, .sidebar-collapsed");
      return !!(grid && grid.classList.contains("sidebar-collapsed"));
    }
    /**
     * @param {number} clientX
     * @param {number} clientY
     * @returns {HTMLElement | null}
     */
    _sidebarAtPoint(clientX, clientY) {
      const hit = document.elementFromPoint(clientX, clientY);
      if (!(hit instanceof Element)) return null;
      const sidebar = hit.closest(SIDEBAR_SELECTOR);
      return sidebar instanceof HTMLElement ? sidebar : null;
    }
    /**
     * @param {HTMLElement} sidebar
     * @param {number} clientX
     * @param {number} clientY
     */
    _isPointInSidebar(sidebar, clientX, clientY) {
      const rect = sidebar.getBoundingClientRect();
      return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    }
    /**
     * Empty = sidebar chrome padding only, not rows/widgets/controls.
     * Collapsed: full column width counts as empty except real icon/label hits.
     *
     * @param {Element | null} target
     * @param {HTMLElement} sidebar
     * @param {number} clientX
     * @param {number} clientY
     */
    _isEmptySidebarClick(target, sidebar, clientX, clientY) {
      if (!this._isPointInSidebar(sidebar, clientX, clientY)) return false;
      const hit = document.elementFromPoint(clientX, clientY);
      if (!(hit instanceof Element) || !sidebar.contains(hit)) return false;
      if (this._isSidebarCollapsed(sidebar)) {
        const blocked2 = hit.closest(COLLAPSED_INTERACTIVE_SELECTOR);
        return !(blocked2 && sidebar.contains(blocked2));
      }
      if (!(target instanceof Element)) return false;
      const chrome = target.closest(SIDEBAR_CHROME_SELECTOR);
      if (!chrome || !sidebar.contains(chrome)) return false;
      const blocked = target.closest(NON_EMPTY_SELECTOR);
      return !(blocked && sidebar.contains(blocked));
    }
    /** @param {boolean} collapsed */
    _emptyCursor(collapsed) {
      return collapsed ? "e-resize" : "w-resize";
    }
    _clearHoverCursor() {
      if (this._hoverSurface) {
        this._hoverSurface.style.removeProperty("cursor");
        this._hoverSurface = null;
      }
    }
    /**
     * @param {MouseEvent} ev
     */
    _onDocumentClick(ev) {
      if (ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.altKey || ev.shiftKey) return;
      if (this._toggleLock) return;
      const sidebar = this._sidebarAtPoint(ev.clientX, ev.clientY);
      if (!sidebar) return;
      if (!this._isEmptySidebarClick(ev.target instanceof Element ? ev.target : null, sidebar, ev.clientX, ev.clientY)) return;
      const toggler = sidebar.querySelector(TOGGLER_SELECTOR);
      if (!(toggler instanceof HTMLElement)) return;
      ev.preventDefault();
      ev.stopPropagation();
      this._toggleLock = true;
      this._clearHoverCursor();
      toggler.click();
      window.setTimeout(() => {
        this._toggleLock = false;
      }, 450);
    }
    /**
     * @param {MouseEvent} ev
     */
    _onDocumentMouseMove(ev) {
      this._clearHoverCursor();
      const hit = document.elementFromPoint(ev.clientX, ev.clientY);
      const sidebar = hit instanceof Element ? hit.closest(SIDEBAR_SELECTOR) : null;
      if (!(sidebar instanceof HTMLElement)) return;
      if (!this._isEmptySidebarClick(hit, sidebar, ev.clientX, ev.clientY)) return;
      sidebar.style.cursor = this._emptyCursor(this._isSidebarCollapsed(sidebar));
      this._hoverSurface = sidebar;
    }
    /**
     * @param {keyof SidebarTweaksOptions} key
     * @param {boolean} value
     */
    _setToggle(key, value) {
      this._options = normalizeOptions({ ...this._options, [key]: value });
      this._applyOptions();
      this._persistOptions();
    }
    /**
     * @param {keyof SidebarTweaksOptions} key
     * @param {boolean} enabled
     */
    _setTunedEnabled(key, enabled) {
      const current = this._options[key];
      if (!current || typeof current !== "object") return;
      this._options = normalizeOptions({
        ...this._options,
        [key]: { ...current, enabled }
      });
      this._applyOptions();
      this._persistOptions();
      this._renderPanel();
    }
    /**
     * @param {keyof SidebarTweaksOptions} key
     * @param {number} value
     */
    _setTunedValue(key, value) {
      const current = this._options[key];
      if (!current || typeof current !== "object") return;
      this._options = normalizeOptions({
        ...this._options,
        [key]: { ...current, value }
      });
      this._applyOptions();
      this._persistOptions();
    }
    async _saveOptionsNow() {
      if (this._configSaveInFlight) {
        this._configSaveQueued = true;
        return;
      }
      if (!this._configSaveDirty) return;
      this._configSaveInFlight = true;
      try {
        const options = normalizeOptions(this._options);
        this._writeStoredOptions(options);
        const plugin = this._globalPluginApi() || await this._ownGlobalPlugin();
        if (!plugin || typeof plugin.saveConfiguration !== "function") return;
        const conf = plugin.getConfiguration ? plugin.getConfiguration() : {};
        const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        if (JSON.stringify(custom.options || {}) === JSON.stringify(options)) {
          this._configSaveDirty = false;
          return;
        }
        await plugin.saveConfiguration(configWithPluginVersion(conf, {
          schemaVersion: 1,
          options
        }, PLUGIN_VERSION));
        this._configSaveDirty = false;
      } catch {
      } finally {
        this._configSaveInFlight = false;
        if (this._configSaveQueued && !this._isUnloading) {
          this._configSaveQueued = false;
          void this._saveOptionsNow();
        }
      }
    }
    /** @returns {import('../../.sdk/types').PluginGlobalPluginAPI | null} */
    _globalPluginApi() {
      try {
        const ownGuid = this.getGuid && this.getGuid();
        if (ownGuid && this.data && typeof this.data.getPluginByGuid === "function") {
          const byGuid = this.data.getPluginByGuid(ownGuid);
          if (byGuid && typeof byGuid.saveConfiguration === "function") return byGuid;
        }
      } catch {
      }
      return null;
    }
    async _ownGlobalPlugin() {
      const direct = this._globalPluginApi();
      if (direct) return direct;
      try {
        const ownGuid = this.getGuid && this.getGuid();
        const plugins = await this.data.getAllGlobalPlugins();
        return plugins.find((p) => p && p.getGuid && p.getGuid() === ownGuid) || plugins.find((p) => p && p.getName && p.getName() === "Sidebar Tweaks") || null;
      } catch {
        return null;
      }
    }
    async _openPanel() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const active = this.ui.getActivePanel && this.ui.getActivePanel();
      if (active) {
        active.navigateToCustomType(PANEL_TYPE);
        return;
      }
      const pluginPanel = await this.ui.createPanel();
      if (pluginPanel) pluginPanel.navigateToCustomType(PANEL_TYPE);
    }
    _renderPanel() {
      if (!this._panelEl) return;
      this._panelEl.replaceChildren(panel({ pluginClass: `${ROOT_CLASS}-panel` }, [
        pluginHeaderFromConfig(this.getConfiguration(), { version: PLUGIN_VERSION }),
        section({ label: "Show/hide items", body: this._showHideRows() }),
        section({ label: "Renaming", body: this._renamingRows() }),
        section({ label: "Behavior", body: this._behaviorRows() }),
        section({
          label: "Layout",
          body: [
            ...this._layoutToggleRows(),
            this._tunedRow("lockAvatarPosition", "Lock avatar icon positioning", "px", "Pins the workspace avatar so it can\u2019t drift or glitch as the sidebar collapses (it stretches full-width and stays centered/hover-natural). The revealed offset is the avatar\u2019s top margin from the sidebar top."),
            this._tunedRow("collapsedSidebarWidth", "Collapsed sidebar width", "px", "Sets how narrow the sidebar is when collapsed. Collection icons stay clickable; use empty-sidebar click or the collapse arrow to expand."),
            this._tunedRow("expandedSidebarWidth", "Expanded sidebar width", "px", "Sets the expanded sidebar width CSS variable."),
            this._tunedRow("collectionRowGap", "Collection row gap", "px", "Vertical space between collection rows in the sidebar."),
            this._tunedRow("collectionRowHeight", "Collection row height", "px", "Minimum height of collection rows, including the hover highlight. Normalizes rows that omit the + button (e.g. Journal)."),
            this._tunedRow("chevronOffset", "Offset chevron", "px", "Shifts the collapsed collection chevron on the x-axis: negative = left, positive = right. (No effect while \u201CHide chevrons when collapsed\u201D is on.)"),
            this._tunedRow("contextMenuWidth", "Right-click context menu width", "px", "Widens the inline command palette opened from sidebar right-click.")
          ]
        })
      ]));
    }
    /** Sidebar top → bottom. */
    _showHideRows() {
      return [
        optionRow({
          type: "checkbox",
          name: "hideWorkspaceSwitcher",
          label: "Hide workspace switcher",
          desc: "Hides the workspace picker / avatar row at the very top of the sidebar.",
          checked: !!this._options.hideWorkspaceSwitcher,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideWorkspaceSwitcher",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "hideCollapseArrow",
          label: "Hide collapse arrow",
          desc: "Hides the built-in sidebar expand/collapse arrow (.sidebar--toggler) in both expanded and collapsed states.",
          checked: !!this._options.hideCollapseArrow,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideCollapseArrow",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "hideSearch",
          label: "Hide Search",
          desc: "Hides both expanded and collapsed sidebar search rows.",
          checked: !!this._options.hideSearch,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideSearch",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "hideJump",
          label: "Hide Jump",
          desc: "Hides the Jump / go-to row from the sidebar top shortcuts.",
          checked: !!this._options.hideJump,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideJump",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "hideCollectionsHeader",
          label: "Hide Collections heading",
          desc: "Hides only the \u201CCollections\u201D header row. Calendar, Inbox, Journals, etc. stay visible and reappear after closing Tags.",
          checked: !!this._options.hideCollectionsHeader,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideCollectionsHeader",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "hideCollections",
          label: "Hide Collections",
          desc: "Hides the Collections heading and every collection row, including separators from Sidebar Seperators.",
          checked: !!this._options.hideCollections,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideCollections",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "hideCollectionOptionMenus",
          label: "Hide collection option menus",
          desc: "Hides the options button that appears when you hover a collection row.",
          checked: !!this._options.hideCollectionOptionMenus,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideCollectionOptionMenus",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "hideCollapsedChevron",
          label: "Hide chevrons when collapsed",
          desc: "Hides the expand chevron (.sidebar-item-toggler) that overlays collection icons in the collapsed sidebar.",
          checked: !!this._options.hideCollapsedChevron,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideCollapsedChevron",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "hideTags",
          label: "Hide Tags",
          desc: "Hides the Tags heading and all tag rows beneath it.",
          checked: !!this._options.hideTags,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideTags",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "hideTrash",
          label: "Hide Trash",
          desc: "Hides the Trash heading and trashed collection rows until turned off here.",
          checked: !!this._options.hideTrash,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideTrash",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "hideSidebarScrollbar",
          label: "Hide sidebar scrollbar",
          desc: "Hides the sidebar scrollbar in expanded and collapsed states. Wheel and trackpad scrolling still work.",
          checked: !!this._options.hideSidebarScrollbar,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "hideSidebarScrollbar",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        })
      ];
    }
    _renamingRows() {
      return [
        this._renameRow("renameCollections", "Collections", "Collections"),
        this._renameRow("renameTags", "Tags", "Tags"),
        this._renameRow("renameTrash", "Trash", "Trash")
      ];
    }
    /**
     * A labeled text input for a heading-rename option. Blank restores the default.
     *
     * @param {'renameCollections'|'renameTags'|'renameTrash'} key
     * @param {string} label
     * @param {string} placeholder
     */
    _renameRow(key, label, placeholder) {
      const input = h("input", {
        type: "text",
        class: "tps-text-input",
        name: key,
        value: (
          /** @type {string} */
          this._options[key] || ""
        ),
        placeholder,
        maxlength: "60",
        onChange: /* @__PURE__ */ __name((e) => this._setText(
          key,
          /** @type {HTMLInputElement} */
          e.target.value
        ), "onChange")
      });
      return h(
        "label",
        { class: "tps-opt tps-opt--text" },
        h("span", { class: "tps-opt-label" }, label),
        input
      );
    }
    /**
     * @param {'renameCollections'|'renameTags'|'renameTrash'} key
     * @param {string} value
     */
    _setText(key, value) {
      this._options = normalizeOptions({ ...this._options, [key]: value });
      this._applyOptions();
      this._persistOptions();
    }
    _behaviorRows() {
      return [
        optionRow({
          type: "checkbox",
          name: "emptySidebarClick",
          label: "Click empty sidebar to collapse/expand",
          desc: "Clicking empty sidebar background toggles collapse. Especially useful when the collapse arrow is hidden.",
          checked: !!this._options.emptySidebarClick,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "emptySidebarClick",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        }),
        optionRow({
          type: "checkbox",
          name: "pinTagsToBottom",
          label: "Pin Tags to bottom",
          desc: "Keeps the Tags section (and Trash below it) anchored at the bottom of the expanded sidebar. Collections scroll above. (No effect while Hide Tags is on.)",
          checked: !!this._options.pinTagsToBottom,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "pinTagsToBottom",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        })
      ];
    }
    _layoutToggleRows() {
      return [
        optionRow({
          type: "checkbox",
          name: "fixPanelAnimation",
          label: "Fix sidebar/panel animation line",
          desc: "Removes the black vertical line on the panel resize handle during sidebar/title animations.",
          checked: !!this._options.fixPanelAnimation,
          onChange: /* @__PURE__ */ __name((e) => this._setToggle(
            "fixPanelAnimation",
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        })
      ];
    }
    /**
     * @param {string} key
     * @param {string} label
     * @param {string} unit
     * @param {string} desc
     */
    _tunedRow(key, label, unit, desc) {
      const entry = this._options[
        /** @type {keyof SidebarTweaksOptions} */
        key
      ];
      const def = DEFAULT_OPTIONS[
        /** @type {keyof typeof DEFAULT_OPTIONS} */
        key
      ];
      if (!entry || typeof entry !== "object" || !def || typeof def !== "object") {
        return h("div");
      }
      const tunedKey = (
        /** @type {keyof SidebarTweaksOptions} */
        key
      );
      const rows = [
        optionRow({
          type: "checkbox",
          name: `${key}-enabled`,
          label,
          desc,
          checked: entry.enabled,
          onChange: /* @__PURE__ */ __name((e) => this._setTunedEnabled(
            tunedKey,
            /** @type {HTMLInputElement} */
            e.target.checked
          ), "onChange")
        })
      ];
      if (entry.enabled) {
        const min = tunedKey === "collapsedSidebarWidth" ? MIN_COLLAPSED_SIDEBAR_WIDTH : void 0;
        rows.push(h("div", { class: "tps-opt-group__value" }, numberRow({
          value: entry.value,
          unit: unit || void 0,
          step: 1,
          min,
          defaultValue: def.value,
          onChange: /* @__PURE__ */ __name((v) => this._setTunedValue(tunedKey, v), "onChange"),
          onReset: /* @__PURE__ */ __name(() => this._setTunedValue(tunedKey, def.value), "onReset")
        })));
      }
      return h("div", { class: `tps-opt-group ${ROOT_CLASS}__tuned-group` }, rows);
    }
  };
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
