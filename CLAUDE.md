# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project called "heic_to_img_web" that appears to be intended for HEIC to image conversion functionality. The project uses TypeScript, Tailwind CSS v4, and React 19.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with PostCSS
- **TypeScript**: Configured with strict mode and path aliases (`@/*` maps to `./`)
- **Linting**: ESLint with Next.js TypeScript rules

## File Structure

- `app/` - Next.js App Router directory containing pages and layouts
- `public/` - Static assets (SVG icons)
- `app/page.tsx` - Main homepage component
- `app/layout.tsx` - Root layout component

## Key Configuration

- Uses TypeScript path aliases (`@/*` → `./`)
- Development server runs with Turbopack for faster builds
- ESLint extends Next.js core web vitals and TypeScript rules