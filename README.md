# @barfinex/types

**Shared TypeScript contracts** for the [Barfinex](https://barfinex.com) ecosystem — accounts, orders, positions, signals, connectors, and API boundaries in one place.

Every Barfinex component (Provider, Detector, Advisor, Inspector, connectors, plugins) uses these types. That means **one language** for trading entities, fewer mismatches between services, and better autocomplete and refactoring in your IDE.

---

## What it does

- **Domain models** — `Account`, `Order`, `Position`, `Candle`, `OrderBook`, `Trade`, `Signal`, and related enums (e.g. `OrderSide`, `MarketType`, `ConnectorType`).
- **Service contracts** — interfaces for detectors, advisors, inspectors, providers, and plugins so they can be composed and proxied.
- **Subscriptions & config** — types for market data subscriptions, detector config, and connector options.
- **Consistency** — same shapes in REST APIs, Redis events, and Studio; aligned with [Provider API](https://barfinex.com/docs/provider-api) and [Detector](https://barfinex.com/docs/installation-detector).

---

## Installation

```sh
npm install @barfinex/types
```

or

```sh
yarn add @barfinex/types
```

---

## What's included

Core interfaces and enums used across the platform, including:

- **Trading** — `Account`, `Order`, `Position`, `OrderSide`, `OrderType`, `OrderSource`, `MarketType`, `ConnectorType`.
- **Market data** — `Candle`, `Trade`, `OrderBook`, `Symbol`, subscription types.
- **Signals & components** — `Signal`, detector/advisor/inspector/provider interfaces, plugin contracts.
- **Config & history** — detector config, history requests, common primitives.

---

## Documentation

- **Barfinex overview** — [First Steps](https://barfinex.com/docs/first-steps), [Architecture](https://barfinex.com/docs/architecture), [Glossary](https://barfinex.com/docs/glossary).
- **APIs (types underpin these)** — [Provider API reference](https://barfinex.com/docs/provider-api), [Building with the API](https://barfinex.com/docs/frontend-api), [Signals context API](https://barfinex.com/docs/signals-context).
- **Deployment** — [Installation provider](https://barfinex.com/docs/installation-provider), [Installation detector](https://barfinex.com/docs/installation-detector), [Terminal Configuration](https://barfinex.com/docs/configuration-studio).
- **Troubleshooting** — [Typical problems and solutions](https://barfinex.com/docs/troubleshooting).

---

## Contributing

Proposals for new domain types or refinements are welcome. Open an [issue](https://github.com/barfinex/lib-types/issues) or PR. Community: [Telegram](https://t.me/barfinex) · [GitHub](https://github.com/barfinex).

---

## License

Licensed under the [Apache License 2.0](LICENSE) with additional terms. Attribution to **Barfin Network Limited** and a link to [https://barfinex.com](https://barfinex.com) are required. Commercial use requires explicit permission. See [LICENSE](LICENSE) and the [Barfinex site](https://barfinex.com) for details.
