```css
.foo {
	columns: 2 auto;
}

.foos {
	columns: auto auto;
}

.bar {
	columns: 2 20px;
}

.baz {
	columns: 20px 2;
}

```

becomes :

```css
.foo{column-count:2}.foos{columns:auto}.bar,.baz{columns:20px}
```
