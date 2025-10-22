# @barfinex/types

**`@barfinex/types`** is the **foundational contract layer** of the [Barfinex](https://barfinex.com) ecosystem — an open-source platform for algorithmic trading, quantitative research, and digital asset infrastructure.

This package consolidates **shared TypeScript interfaces, models, and enums** that describe the **core entities of trading systems**: accounts, orders, positions, markets, connectors, and signals. By centralizing these contracts, it ensures:

- 🔄 **Consistency** — all Barfinex modules speak the same language when exchanging data.
- 🛡 **Type-safety** — developers get early validation and autocompletion across microservices.
- ⚡ **Reusability** — one canonical definition of orders, accounts, and events prevents duplication.
- 🌍 **Interoperability** — external contributors and integrators can easily plug into Barfinex APIs.

`@barfinex/types` is not just a helper package — it is the **schema backbone of the Barfinex ecosystem**, enabling detectors, advisors, providers, and plugins to interact without ambiguity.

---


## 🚀 Purpose

The `@barfinex/types` package is designed to provide reusable type definitions across the following modules:

- `@barfinex/detectors` — signal-generating microservices
- `@barfinex/advisors` — advisory logic and recommendations
- `@barfinex/inspector` — rule-based market condition monitoring
- `@barfinex/provider` — data and trading connector layer
- `@barfinex/utils` — utility helpers and shared logic for Barfinex services
- `@barfinex/types` — canonical TypeScript interfaces and enums (this package)
- `@barfinex/telegram` — integration layer for Telegram notifications and bots
- `@barfinex/provider-ws-bridge` — WebSocket bridge between Barfinex services and external data providers
- `@barfinex/orders` — unified order management logic
- `@barfinex/key` — secure key and credential management
- `@barfinex/detector` — event-driven detection microservices
- `@barfinex/connectors` — external trading and data connectors (Binance, etc.)
- `@barfinex/config` — centralized configuration and environment management
- `@barfinex/plugin-driver` — runtime plugin driver for modular extensions
- `@barfinex/detector-plugin-orderflow-trade-analytics` — plugin for orderflow and trade analytics
- `@barfinex/detector-plugin-trade-journal` — plugin for trade journaling and historical tracking
- `ui-api` — unified API and external access layer
- `ui-client` — UI components for account and strategy management

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

## 📜 License

This repository is licensed under the [Apache License 2.0](LICENSE) with additional restrictions.

### Key Terms:
1. **Attribution**: Proper credit must be given to the original author, Barfin Network Limited, with a link to the official website: [https://barfin.network/](https://barfin.network/).
2. **Non-Commercial Use**: The use of this codebase for commercial purposes is prohibited without explicit written permission.
3. **Display Requirements**: For non-commercial use, the following must be displayed:
   - The name "Barfin Network Limited".
   - The official logo.
   - A working link to [https://barfinex.com/](https://barfinex.com/).

For further details or to request commercial use permissions, contact **Barfin Network Limited** through the official website.
