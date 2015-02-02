#
# Targets
#

.PHONY: all css
all: css

#
# CSS
#

CSS_OUT=css
CSS_SRC=src-css
CSS_SRC_FILES=$(shell find $(CSS_SRC) -type f -name '*.styl')


css: css/plugin.css

$(CSS_OUT)/plugin.css: $(CSS_SRC)/plugin.styl $(CSS_SRC_FILES)
	cd $(CSS_SRC); cat plugin.styl | stylus > ../$(CSS_OUT)/plugin.css

