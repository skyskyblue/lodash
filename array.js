const _ = require('lodash')
// 1.find
    const arr1 = [
    {
        name: '张三',
        age: 12
    },
    {
        name: '李四',
        age: 8
    }]
    console.log(_.find(arr1,['name', '李四']))
    console.log(_.find(arr1, (item) => item.age > 8 ))
    console.log(_.find(arr1, {'name': '李四'}))