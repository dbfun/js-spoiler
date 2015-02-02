#
# Targets
#

.PHONY: all css download
all: css

#
# CSS
#

CSS_SRC_FILES=$(shell find $(src-css) -type f -name '*.styl')

css: css/spoiler.css

css/spoiler.css: src-css/js-spoiler.styl $(CSS_SRC_FILES)
	cd src-css; cat js-spoiler.styl | stylus > ../css/spoiler.css

download: download/spoiler.tar.gz

download/spoiler.tar.gz: css
	@echo TODO