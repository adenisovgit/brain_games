startc:
	npx babel-node -- src/bin/brain-calc.js

starte:
	npx babel-node -- src/bin/brain-even.js

startg:
	npx babel-node -- src/bin/brain-gcd.js

startp:
	npx babel-node -- src/bin/brain-progression.js

startpr:
	npx babel-node -- src/bin/brain-prime.js

install:
	npm install

publish:
	npm publish

lint:
	npx eslint .