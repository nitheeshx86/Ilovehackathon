# I_love_hackathon_chennai_web_3_edition

# Blockchain-Based Vehicle Authentication System

## Overview

This project is a decentralized vehicle authentication system using blockchain technology. It allows vehicle manufacturers, owners, and service centers to register, track, and verify vehicle parts using smart contracts. The system ensures the authenticity of vehicle components, preventing fraud, theft, and black-market sales.

---

## Features

- **Manufacturer Dashboard**:
  - Mint new vehicle parts and generate unique QR codes.
  - Store part information securely on the blockchain.
  - Link each QR code to the blockchain record for verification.

- **Customer Dashboard**:
  - Display a grid of owned items (e.g., car, house).
  - Click on a car to see its individual parts (e.g., engine, transmission, etc.).
  - Each part is displayed as an NFT-like card showing the manufacturer, manufacturing date, and other details.
  - Share parts with others by sending a dummy password for validation.

- **QR Code Scanner**:
  - Integrate a QR code scanner to verify part authenticity by fetching details from the blockchain.

---

## Technical Requirements

### Blockchain Platform:
- **Ethereum** (or other compatible blockchain networks like Polygon, Binance Smart Chain)

### Smart Contract Language:
- **Solidity** for smart contract development

### Frontend Framework:
- **React.js** or **Next.js** for the frontend application

### Backend:
- **Node.js** with **Express.js** to handle API calls for Web3 interactions

### Blockchain Libraries:
- **Web3.js** or **Ethers.js** for interacting with the Ethereum network

### Wallet Integration:
- **MetaMask** for wallet connection and transaction handling

### QR Code Integration:
- Use a QR code scanner to fetch vehicle part information directly from the blockchain.

---

## Setup & Installation

### Prerequisites

Before running the project, make sure you have the following installed:
- **Node.js** and **npm** (Node package manager)
- **MetaMask** (for wallet integration)
- **Infura** or **Alchemy** account (for connecting to Ethereum testnets and mainnet)

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository-name.git
   cd vehicle-authentication
