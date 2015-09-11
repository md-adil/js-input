# js-input
A JavaScript plugin that let's you get the Query String from the URL, It's probably the simplest way to fetch GET variables built on planet.
## easy to use.

let's say url is 
<http://hostname/something?name=somename&roll=developer&message=somemessage&email=somename@host.com&something=somethingelse>

```js
input()
// output object of all inputs
{name: 'somename', roll: 'developer', ... }

/*
* @param string
*/
input('name')
// output value
'somename'

/*
* @param array
*/
input(['names', 'roll'])
// output object
{name: 'somename', roll: 'developer'}

/*
* @param object
*/
input().append({appeded: 'this-is-append'})
// output object
{name: 'somename', roll: 'developer', ..., appeded: 'this-is-append'}

/*
* @param array or string
*/
input().not(['name', 'roll'])
// output object excluding what in not function
{ message: 'somemessage', email: 'somename@host.com', ... }

/*
* @param array or string
*/
input(['name', 'roll']).param
// output string serialise input
'name=somename&roll=developer'

/*
* @param array or string
*/
input().not(['name', 'roll']).param
// even use with not
// output serialise input
'message=somemessage&email=somename@host.com&something=somethingelse'
```