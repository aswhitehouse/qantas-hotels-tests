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
- Wide parameters mean less specificity in the test around the target components e.g. hotel type / property details (which is a very valid smoke test approach, i.e. env stability, critical transactions always work etc.)
- Narrow parameters mean more specificity in the test however greater chance that environment conditions could make the test fail due to absence of a more narrow query result potential
- XHR intercept would be good & predictable, don't have the scope here to try to implement it, the downside with this is of course it starts to introduce complexity into the client (unless we can programmatically pull the spec from the service, then this would be perfect as an isolated component test).

### Chosen Approach
- I have chosen to take a 'wide parameter' smoke, monitoring alerting style transaction approach given the project constraints
- This is a typical "transaction" style test that I would write as a suite of "critical revenue generating" scenarios that could ideally run constantly sending results into a real-time monitoring dashboard
- These tests typically provide tremendous value in quickly demonstrating constraints in the current system/SDLC

## Observations
- Really good to have data-testid attributes everywhere, very test friendly
- The usage of the data-testid element didn't seem consistent in my initial parsing of the DOM, meaning I would either have to somtimes get parent anchor elements or pick other attributes that may be less likely to change, E.G. Role/Aria etc. If it was just on all key fields UI automation would be a breeze!
- I've tried so far to avoid brittle chaining or id's or css selectors etc.
- For example the search input boxes both have the same location id name, which Cypress sees and becomes confused about which one is being referrel to, meaning traversal logic is then required i.e. first()
- In this case, if I were to build out the test suite, I'd need to handle both the Hotel/AirBnb search forms, and rather than write logic to decide which one I'm on and to navigate them, if the data-testid attributes were unique for each one it would simplify the future test logic
- Sometimes the 'down-shift' menu from the location search results doesn't appear timing my test out, I'm not immediately sure why, however a dynamic wait does help (this is a poll wait and not a static sleep). Sometimes however it never appears, this may be a Cypress runtime issue.
- Sometimes Qantas Hotels tells me, "Couldn't find any hotels" that match my search, but when I interact with the page in the Cypress portal my search location is there. Maybe a Cypress anomaly?
- Seeing some unusual timeout behaviour, adding in additional waits (dynamic), that seem to calm down the issue
- On the search results page, each 'result' follows the target="_blank" pattern, of new tab open, which is difficult to manage with Cypress as a testing tool. There's a few strategies to handle this, I first thought of copying the href="/path" and appending this to the original uri, which works fine, then I tried the invoke() method which allows manipulation of the DOM to make this link render in the same page. In retrospect, the href copy is possibly a better strategy.

## Observability
- Ideally push results to a sink / Prometheus->Grafana

## TODO
- Will add build configurations & infra
- Will add reporting, i.e. mocha awesome etc.

## How to run
- Locally within your Node development environment:
### Install packages
> npm install
### Headless Run
> npx cypress run
### Hosted Portal
> npx cypress open
