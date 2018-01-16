/**
 * Created by mingruiwei on 2016/10/4.
 */
function AjaxRequest(){
    var ajaxRequestUrl=null;
    var getHtmlContentCount=0;
    var _this=this;
    this.getHtmlContent=function(url, referer,method, params,dataType, callback)
    {
        console.log(url);
        timebefore = Date.now();
        if(url != null && url != "" && url != undefined) {
            if(ajaxRequestUrl != url){
                getHtmlContentCount = 0;
            }
            ajaxRequestUrl = url;
            ajaxRequestHandler = $.ajax({
                type: method,
                url: url,
                data:params,
                dataType: dataType,
                timeout: 5000,
                contentType:"application/x-www-form-urlencoded; charset=UTF-8",
                success: function (data) {
                    ajaxRequestHandler = null;
                    if(url != ajaxRequestUrl){
                        console.log("url is invalid");
                        return;
                    }
                    getHtmlContentCount++;
                    console.log(Date.now()-timebefore);
                    var object = new Object();
                    object.url = url;
                    object.data = data;
                    if(object == '' && getHtmlContentCount < 2){
                        _this.getHtmlContent(url, referer, method, params,dataType, callback);
                        return
                    }else{
                        getHtmlContentCount = 0;
                        ajaxRequestUrl = null;
                    }
                    callback(object);
                    return ;
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    ajaxRequestHandler = null;
                    console.log("Error: failed to get string from remote file");
                    if(url != ajaxRequestUrl){
                        return;
                    }
                    getHtmlContentCount++;
                    if(getHtmlContentCount < 2){
                        _this.getHtmlContent(url, referer,method,params,dataType,callback);
                    }else{
                        getHtmlContentCount = 0;
                        ajaxRequestUrl = null;
                        callback();
                    }
                    return;
                }
            });
        }
    };
}