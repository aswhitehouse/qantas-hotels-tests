# Qantas Hotels

## Automated Smoke Tests
1. I want to be able to search for a hotel stay
2. I want to be able to reach the checkout page

## Approach
### Dynamic Data
- Searching for hotels and proceeding to check-out in production will require dealing with dynamic data & conditions
- Approaches that may make this approach more stable without having more control over the application - would be:

1. Wide parameter selection
2. Narrow parameter selection
3. XHR intercept/Middleware control, data control (magic uris etc, test profiles)

- All approaches have drawbacks and the potential to be brittle based on inventory/availability/downstream conditions
- Wide parameters mean less specificity in the test around the target components e.g. hotel type / property details (which is a very valid smoke test approach, i.e. env stability, critical transactions work etc.)
- Narrow parameters mean more specificity in the test however greater chance that environment conditions could make the test fail due to absence of a more narrow requirement set

### Chosen Approach
- I have chosen to take a 'wide parameter' smoke, monitoring alerting style transaction approach given the project constraints
- This is a typical "transaction" style test that I would write as a suite of "critical revenue generating" scenarios that could ideally run constantly sending results into a real-time monitoring dashboard
- These tests typically provide tremendous value in quickly demonstrating constraints in the current system/SDLC

## Observations
TODO

## How to run
- Locally within your Node development environment:
### Install packages
> npm install
### Headless Run
> npx cypress run
OR
### Hosted Portal
> npx cypress open
