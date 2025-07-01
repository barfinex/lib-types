# @barfinex/types

**@barfinex/types** is a collection of shared TypeScript interfaces and enums used across the [Barfinex](https://barfinex.com) ecosystem — an open-source platform for algorithmic trading and digital asset infrastructure.

---

## 🚀 Purpose

The `@barfinex/types` package is designed to provide reusable type definitions across the following modules:

- `@barfinex/detectors` — signal-generating microservices
- `@barfinex/advisors` — advisory logic and recommendations
- `@barfinex/inspector` — rule-based market condition monitoring
- `@barfinex/provider` — data and trading connector layer
- `@barfinex/ui-api` — unified API and external access layer
- `@barfinex/ui-client` — UI components for account and strategy management

It helps to:
- unify contracts between services;
- reduce duplication;
- ensure type-safety and clarity across the codebase.

---

## 📦 Installation

To install the package, use npm or yarn:

```sh
npm install @barfinex/types
```

or

```sh
yarn add @barfinex/types
```

---

## 📘 Example Usage

Import the necessary interfaces into your TypeScript project:

```ts
import { Account, MarketType, ConnectorType, OrderSide, OrderType, OrderSource } from '@barfinex/types';

const account: Account = {
  id: '123',
  name: 'Test Account',
  balance: 1000,
  marketType: MarketType.futures,
  connectorType: ConnectorType.binance,
  positions: [],
  orders: [
    {
      id: '456',
      symbol: { name: 'BTCUSDT' },
      externalId: 'ext-123',
      side: OrderSide.buy,
      type: OrderType.limit,
      price: 500,
      time: Date.now(),
      updateTime: Date.now(),
      quantity: 10,
      quantityExecuted: 0,
      useSandbox: false,
      priceClose: 510,
      connectorType: ConnectorType.binance,
      marketType: MarketType.futures,
      source: { type: OrderSourceType.detector },
      leverage: 10,
    },
  ],
};
```

---

## 📚 What's Included

The `@barfinex/types` package provides core type definitions and enums used across all Barfinex components. It includes:

- **Accounts, Positions, and Orders** — unified models for trading objects
- **Trading Platforms and Markets** — support for `spot`, `futures`, and custom market types
- **Signal and Order Sources** — such as detectors, advisors, and inspectors
- **Data Subscriptions** — for market data, user events, signals, etc.
- **Component Interfaces** — shared definitions for detectors, advisors, inspectors, providers

---

## 🤝 Contributing

We welcome contributions to help grow the **open Barfinex standard**:

- 🛠 Open an issue or submit a PR
- 💡 Propose new domain types or improvements
- 💬 Share feedback or use cases

Join the conversation in our Telegram community: [t.me/barfinex](https://t.me/barfinex)

---

## 📜 This repository is licensed under the [Apache License 2.0](LICENSE) with additional restrictions.

### Key Terms:
1. **Attribution**: Proper credit must be given to the original author, Barfin Network Limited, with a link to the official website: [https://barfin.network/](https://barfin.network/).
2. **Non-Commercial Use**: The use of this codebase for commercial purposes is prohibited without explicit written permission.
3. **Display Requirements**: For non-commercial use, the following must be displayed:
   - The name "Barfin Network Limited".
   - The official logo.
   - A working link to [https://barfin.network/](https://barfin.network/).

For further details or to request commercial use permissions, contact **Barfin Network Limited** through the official website. 
