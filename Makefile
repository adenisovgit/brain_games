startc:
	npx babel-node -- src/bin/brain-calc.js

starte:
	npx babel-node -- src/bin/brain-even.js

install:
	npm install

publish:
	npm publish

lint:
	npx eslint .