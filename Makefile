.PHONY: install brain-games publish

install:
	npm ci
	chmod +x bin/brain-games.js

brain-games:
	./bin/brain-games.js

publish:
	npm publish --dry-run