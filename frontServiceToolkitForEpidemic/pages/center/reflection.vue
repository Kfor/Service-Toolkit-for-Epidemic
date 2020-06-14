<!DOCTYPE html>
<style type="text/css">
        .Content-Main{
            max-width: 500px;
            margin: auto;
            margin-top: 2upx;
            padding: 20px 30px 20px 30px;
            font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-shadow: 1px 1px 1px #FFF;
            border: 1px solid #DDD;
            border-radius: 5px;
            color: #888;
            background: #FFF;
        }
        .Content-Main h1{
            display: block;
            padding: 0px 0px 10px 40px;
            margin: -10px -30px 30px -30px;
            font: 25px "Helvetica Neue", Helvetica, Arial, sans-serif;
            border-bottom: 1px solid #DADADA;
            color: #888;
        }
        .Content-Main h1>span{
            display: block;
            font-size: 11px;
        }
        .Content-Main label{
            display: block;
            margin: 0px 0px 5px;
        }
        .Content-Main label>span{
            float: left;
            width: 20%;
            padding-right: 10px;
            margin-top: 10px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: bold;
            text-align: right;
            color: #333;
        }
        .Content-Main input[type="text"],.Content-Main textarea{
            width: 70%;
            height: 40px;
            padding: 5px 0px 5px 5px;
            margin-bottom: 16px;
            margin-right: 6px;
            margin-top: 2px;
            line-height: 15px;
            border-radius: 4px;
            border: 1px solid #CCC;
            color: #888;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }
        .select1{
            width: 71%;
            margin-bottom: 16px;
            margin-right: 6px;
			margin-left: 20upx;
            margin-top: 2px;
            line-height: 15px;
            padding: 5px 0px 5px 5px;
            border-radius: 4px;
            border: 1px solid #CCC;
            color: #888;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }
        .select2{
            width: 40%;
            border-radius: 4px;
            border: 1px solid #CCC;
            color: #888;
			margin-left: 20upx;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }
        .Content-Main textarea{
            width: 70%;
            height: 100px;
            padding: 5px 0px 0px 5px;
        }
        .button{
            padding: 10px 25px 10px 25px;
            margin-left: 200px;
			width: 20%;
            border-radius: 4px;
            border:1px solid #CCC;
            background: #FFF;
            color: #333;
        }
        .button:hover{
            color: #333;
			
            background-color: #EBEBEB;
            border-color: #ADADAD;
        }
    </style>

<template>
<div class="Content-Main">
    <form action="" method="post" class="form-report">
        <view>
            <span>Contact:</span>
            <select name="select2" class="select2">
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="QQ">QQ</option>
            </select>
            <input type="text" placeholder="">
        </view>
        <view>
            <span>Message:</span>
            <textarea id="mesaage" name="message" placeholder="Your can tell me"></textarea>
        </view>
        <view>
            <span>Subject:</span>
            <select name="select1" class="select1">
                <option value="Job Inquiry">Job Inquiry</option>
                <option value="General Question">General Question</option>
            </select>
        </view>
        <view>
            <input type="button" class="button" value="Send">
        </view>
    </form>
</div>
</template>