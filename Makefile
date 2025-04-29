.PHONY: install brain-games publish link lint

# Установка зависимостей и настройка прав
install:
	npm ci
	chmod +x bin/brain-games.js

# Запуск проекта
brain-games:
	node bin/brain-games.js

# Тест перед публикацией (без реальной отправки)
publish:
	npm publish --dry-run

# Локальная установка (может потребоваться sudo)
link:
	npm link

# Запуск линтера. Флаг --fix позволяет автоматически исправить ошибки.
lint:
	npx eslint --fix .