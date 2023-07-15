Ensure you're within the playground-server directory.

### Configure environment variables

```bash
touch .env.local
```

Supply an RPC Endpoint, for example:

`PONDER_RPC_URL_11155111="https://eth-sepolia.g.alchemy.com/v2/{API-KEY}"`

### Start the development server

```bash
pnpm dev
```

### Visit the local GraphQL server

<http://localhost:42069>

---

If you're adjusting the `schema.graphql` file, grab the GraphQL extension for VSCode which provides syntax highlighting and code snippets for files ending with `.gql` and `.graphql`.

