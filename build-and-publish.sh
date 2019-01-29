# Set git config so npm publish is successful
git config --global user.email "uktrade@digital.trade.gov.uk"
git config --global user.name "uktrade"

# Build npm package
npm run build

# Set url and authentication key prior to publishing the npm package
echo "//registry.npmjs.org/:_authToken=$AUTH_TOKEN" > ~/.npmrc

# Set npm package versioning
npm version "1.0.$CIRCLE_BUILD_NUM"

# Publish npm package
npm publish
