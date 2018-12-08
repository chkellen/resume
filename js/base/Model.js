window.Model = function(options){
    let resourceName = options.resourceName
    return{
        init: function(){
            var APP_ID = 'vClJWVJJbDIMBbkcdeyrtItl-gzGzoHsz'
            var APP_KEY = 'a203qGHeKC0HVjO2tazSWtqX'
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch: function(){
            var query = new AV.Query(resourceName);
            var now = new Date()
            query.lessThanOrEqualTo('createdAt', now)//查询今天之前创建的 Todo
            query.limit(10)// 最多返回 10 条结果
            query.descending('createdAt')
            return query.find()
        },
        save: function(object){
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        }
    }
}