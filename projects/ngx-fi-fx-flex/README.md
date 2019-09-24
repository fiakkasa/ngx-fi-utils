# NgxFiFxFlex

Responsive flex css framework, inspired by Angular FlexLayout

## Installation

- `npm i ngx-fi-fx-flex --save`

## How to use

### Registration

Consider using of the below approaches

#### angular.json

Under _styles_ **flex.min.css** or **flex.scss**

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  ...
  "projects": {
    "project-name": {
      ...
      "architect": {
        "build": {
          ...
          "options": {
            ...
            "styles": [
              "node_modules/ngx-fi-fx-flex/flex.min.css"
              ...
            ]
          }
        }
      }
    }
    ...
  }
}
```

#### styles.scss

```scss
@import "~ngx-fi-fx-flex/flex.min.scss";
```

#### index.html

Expose **flex.min.css** in a public location and register in your index.html

```html
<link async rel="stylesheet" href="path_to_styles/flex.min.css" />
```

### Customizations

Feel free to customize below vars as needed per your respective use case

The solution consists of the following mixins resing under `mixins.scss`

- `flex`: produces the entire framework using below mixins
- `fxBreakpoints`: uses fxStyling to produce styles based on defined breakpoints
- `fxStyling($prefixValue)`: produces styling
  - a blank prefix value would result to something like `fx-dir-row`
  - a prefix value like **xs** would result to something like `.fx-xs-dir-row`

And the following vars:

- `breakpoints.scss`

```scss
$fxBreakpoints: (
  xxl: (
    (
      min: 5000px,
      max: ""
    )
  ),
  xl: (
    (
      min: 1920px,
      max: 4999.9px
    )
  ),
  lg: (
    (
      min: 1280px,
      max: 1919.9px
    )
  ),
  md: (
    (
      min: 960px,
      max: 1279.9px
    )
  ),
  sm: (
    (
      min: 600px,
      max: 959.9px
    )
  ),
  xs: (
    (
      min: 0,
      max: 599.9px
    )
  )
) !default;
```

- `vars.scss`

```scss
$fxNumberOfColumns: 12 !default;
$fxGrowAndShrink: 12 !default;
$fxDisplayCollection: (("flex", "flex"), ("inline-flex", "inline-flex")) !default;
$fxDirectionCollection: (
  ("row", "row"),
  ("row-reverse", "row-reverse"),
  ("column", "column"),
  ("column-reverse", "column-reverse")
) !default;
$fxWrapCollection: (("wrap", "wrap"), ("nowrap", "nowrap"), ("wrap-reverse", "wrap-reverse")) !default;
$fxJustifyContentCollection: (
  ("start", "flex-start"),
  ("end", "flex-end"),
  ("center", "center"),
  ("space-around", "space-around"),
  ("space-between", "space-between"),
  ("space-evenly", "space-evenly")
) !default;
$fxItemsAlignmentCollection: (
  ("start", "flex-start"),
  ("end", "flex-end"),
  ("center", "center"),
  ("baseline", "baseline"),
  ("stretch", "stretch")
) !default;
$fxSelfAlignmentCollection: (
  ("auto", "auto"),
  ("start", "flex-start"),
  ("end", "flex-end"),
  ("center", "center"),
  ("baseline", "baseline"),
  ("stretch", "stretch")
) !default;
$fxPrefix: "fx" !default;
```
