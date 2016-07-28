	//<![CDATA[
		//前端模板数据部分
		var data = {
			"list" : [
				{"id" : 1,"name" : "数据1"},
				{"id" : 2,"name" : "数据2"},
				{"id" : 3,"name" : "数据3"},
				{"id" : 4,"name" : "数据4"},
				{"id" : 5,"name" : "数据5"},
				{"id" : 6,"name" : "数据6"},
				{"id" : 7,"name" : "数据7"},
				{"id" : 8,"name" : "数据8"},
				{"id" : 9,"name" : "数据9"},
				{"id" : 10,"name" : "数据10"}
			]
		}

		//业务逻辑部分
		var action = {
		  sort:function(list, inc){
		    $("sort").className = inc?"down":"up";
		    list.sort(function(a, b){
		      return (inc?1:-1)*a.name.localeCompare(b.name);
		    });
		    render(data);
		  },
		  create : function(name){
		    data.list.unshift({id: +new Date(),name: name});
		    render(data);
		  },
		  edit : function(id){
		    each(data.list, function(value, i){
		      data.list[i].state = value.id == id ? "edit" : "normal";
		    });
		    render(data);
		  },
		  del : function(id){
		    each(data.list, function(value, i){
		      if(value.id == id){
		        data.list.splice(i,1);
		      }
		    })
		    render(data);
		  },
		  save : function(id){
		    each(data.list, function(value, i){
		      if(value.id == id){
		        value.name = $("g_" + id).value;
		        value.state = "normal";
		      }
		    });
		    render(data);
		  },
		  cancel : function(id){
		    each(data.list, function(value, i){
		      data.list[i].state = "normal";
		    });
		    render(data);
		  }
		}
		function $(id){
		  return document.getElementById(id);
		}
		function each(obj, fn){
		  for (var i = 0; i < obj.length; i++) {
		     fn.call(obj[i], obj[i], i); 
		  }
		}

		var teamList = baidu.template('teamList');
		function render(data){
		  $("container").innerHTML = teamList(data);
		}

		window.onload = function(){
			render(data);
		}
		//]]>
