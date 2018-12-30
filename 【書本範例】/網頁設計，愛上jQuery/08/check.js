   var aa=$(':input[name=id]').val();
   var bb=$(':input[name=id]').attr('rel');
   bb=parseInt(bb);
   var aalength=aa.length;
   var message=undefined;
   if (aalength=="" || aalength==undefined)
   
   {
	   message='欄位不可空白 ';
	   
   }
   if (aalength >0 && aalength<bb)
   {
	   message='長度太短 ';
	   
   }
  if (aa=='1234567890')
  {
	   message='這個ID已有會員使用 ';
	   
  }
 