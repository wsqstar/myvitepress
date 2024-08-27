# 复现数学公式的建议
最近尝试将R语言转为Python语言的公式。首先用GPT跑了一下，报错。
1. 报错1： 找不到对应的列名称。这是由于R的series是可以指定列名称的，但是python的不可以。
2. 报错2：形状有错误。比如矩阵，一般来说复现的时候可以首先关注矩阵的整体形状，保证可以运行。
3. 报错3：数量级相似，但是结果不一致。可以梳理整个数据的流程，从源头往结果找，查看几个数据对应的头即可。
   1. 尤其是注意，python和R语言的reshape不同。**按照默认：python是按照行填充，R语言是按照列填充。** 两者均有参数可以修改填充方式。
   2. 在Visual Studio Code上，有Data Wrangler插件，可以很好的检查Dataframe的内容。十分推荐。
   
![Data Wrangler Plug-in](pics/587cf2b8dd43954604d22d2941508cd.png)