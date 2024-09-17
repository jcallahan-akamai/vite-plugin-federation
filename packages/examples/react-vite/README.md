# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. `host` (react based) depends on a component exposed by `remote` app (react based).

## Running

Install `pnpm` as per instructions provided [here](https://pnpm.io/installation)

Run `pnpm install`, then `pnpm run build` and `pnpm run serve`. This will build and serve both `host` and `remote` on ports 5000, 5001 respectively.

- HOST: [localhost:5000](http://localhost:5000/)
- REMOTE: [localhost:5001](http://localhost:5001/)

`CTRL + C` can only stop the host server. You can run `pnpm stop` to stop all services.

**To test error handling:**
- Open localhost:5000 in your browser
- Use browser dev tools to block requests to localhost:5001
- Observe the error message in the "Remote App" box
<img src="https://github.com/user-attachments/assets/85d3e7b3-73dd-434d-963f-de153d437d28" width="600" />
