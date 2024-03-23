# 深度强化学习

本文目前是 深度强化学习的读书笔记。

Richard Sutton 和他的老师 Andrew Barto 合著的 Reinforcement Learning: An Introduction1是强化学习领域的“圣经”


- 线性回归、逻辑斯谛回归、softmax 分类器属于简单的线性模型. 它们分别相当于线性函数不加激活函数、加 sigmoid 激活函数、加 softmax 激活函数. 这三种模型分别应用于回归问题、二分类问题、多分类问题.
- 全连接层的输入是向量，输出也是向量. 主要由全连接层组成的神经网络叫作全连接神经网络，也叫多层感知机（MLP）.
-  卷积层有很多种，本书中只用 2D 卷积层（Conv2D），它的输入是矩阵或三阶张量，输出是三阶张量. 主要由卷积层组成的神经网络叫作卷积神经网络（CNN）.
-  在搭建神经网络的时候，我们随机初始化神经网络参数，然后通过求解、优化问题来学习参数. 梯度下降及其变体（比如随机梯度下降、RMSProp、Adam）是最常用的优化算法，它们用目标函数的梯度来更新模型参数.
-  对于线性模型，我们可以轻易地求出梯度. 然而神经网络是很复杂的函数，无法直接求出梯度，需要做反向传播. 反向传播的本质是用链式法则求出目标函数关于每一层参数的梯度. 读者需要理解链式法则，但无须掌握技术细节，TensorFlow 和 PyTorch 等深度学习标准库都可以自动做反向传播，不需要读者手动计算梯度.