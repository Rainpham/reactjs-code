/*Làm việc với form
1.onChange
2.value
*/
//hàm bắt sự thay đổi khi nhập form
onChange=(e)=>{
    var target = e.target;
    var name   = target.name;
    var value  = target.type==='checkbox'? target.checked : target.value;
        this.setState({
            [name]:value
        });   
    };

//hàm này dùng <form onsubmit={this.onSave}
onSave=(e)=>{
    var {txtname,txtprice,ckbstatus}=this.state;
    e.preventDefault();// chặn tính năng của form
    //ham goi API
    callApi('product','POST',{
        name:txtname,
        price:txtprice,
        status:ckbstatus
    }).then(res=>{
        console.log(res.data);  
    })
    }