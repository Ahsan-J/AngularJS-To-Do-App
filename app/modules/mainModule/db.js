app.factory('rsData',['$resource',function($resource){
    return $resource('./data.json');
}]);

app.factory('db',['moment','rsData',function(moment,rsData){
    return{
        links:[
            {title:'App',link:'App'},
            {title:'About',link:'About'}
        ],
        getLinks:function(){
            return this.links;
        },
        list:rsData.query(),
        addData:function(data){
            var value = {
                name:data,
                editState:false,
                time:moment().format('h:mm:ss a'),
            }
            this.list.unshift(value);
        },
        getData:function(){
            return this.list;
        },
        deleteData:function(index){
            this.list.splice(index,1);
        },
        editData:function(index,newData){
            var value = {
                ...this.list[index],
                name:newData,
                editState:false,
            }
            this.list.splice(index,1,value);
        }
    }
}]);
