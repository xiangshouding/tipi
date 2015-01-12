#目录

## 第一部分 基本原理

- [第一章 准备工作和背景知识](book/chapt01/01-00-prepare-and-background.markdown)
    * [第一节 环境搭建](book/chapt01/01-01-php-env-building.markdown)
    * [第二节 源码布局及阅读方法](book/chapt01/01-02-code-structure.markdown)
    * [第三节 常用代码](book/chapt01/01-03-comm-code-in-php-src.markdown)
    * [第四节 小结](book/chapt01/01-04-summary.markdown)

- [第二章 用户代码的执行](book/chapt02/02-00-overview.markdown)
    * [第一节 PHP生命周期](book/chapt02/02-01-php-life-cycle-and-zend-engine.markdown)
    * [第二节 从SAPI开始](book/chapt02/02-02-00-overview.markdown)
        + [Apache模块](book/chapt02/02-02-01-apache-php-module.markdown)
        + [嵌入式](book/chapt02/02-02-02-embedding-php.markdown)
        + [Fastcgi](book/chapt02/02-02-03-fastcgi.markdown)
    * [第三节 Zend引擎与脚本执行](book/chapt02/02-03-00-how-php-script-get-executed.markdown)
        + [词法分析和语法分析](book/chapt02/02-03-01-lex-and-yacc.markdown)
        + (book/chapt02/02-03-02-opcode.markdown)[opcode]
        + [附：找到Opcode具体实现](book/chapt02/02-03-03-from-opcode-to-handler.markdown)
    * [第四节 小结](book/chapt02/02-04-summary.markdown)

- [第三章 变量及数据类型](book/chapt03/03-00-variable-and-data-types.markdown)
    * [第一节 变量的内部结构](book/chapt03/03-01-00-variables-structure.markdown)
        + [哈希表(HashTable)](book/chapt03/03-01-01-hashtable.markdown)
        + [PHP的哈希表实现](book/chapt03/03-01-02-hashtable-in-php.markdown)
        + [链表简介](book/chapt03/03-01-03-zend-llist.markdown)
        + [堆栈的实现]()
    * [第二节 常量](book/chapt03/03-02-const-var.markdown)
    * [第三节 预定义变量](book/chapt03/03-03-pre-defined-variable.markdown)
    * [第四节 静态变量](book/chapt03/03-04-static-var.markdown)
    * [第五节 类型提示的实现](book/chapt03/03-05-impl-of-type-hint.markdown)
    * [第六节 变量的生命周期](book/chapt03/03-06-00-var-lifecycle.markdown)
        + [变量的赋值和销毁](book/chapt03/03-06-01-var-define-and-init.markdown)
        + [变量的作用域](book/chapt03/03-06-02-var-scope.markdown)
        + [global语句](book/chapt03/03-06-03-var-global.markdown)
    * [第七节 数据类型转换](book/chapt03/03-07-type-cast.markdown)
    * [第八节 小结](book/chapt03/03-08-summary.markdown)

- [第四章 函数的实现](book/chapt04/04-00-php-function.markdown)
    * [第一节 函数的内部结构](book/chapt04/04-01-00-function-struct-overview.markdown)
        + [函数的内部结构](book/chapt04/04-01-01-function-struct.markdown)
        + [函数间的转换](book/chapt04/04-01-02-function-union.markdown)
    * [第二节 函数的定义,参数及返回值](book/chapt04/04-02-00-function-define-param-return.markdown)
        + [函数的定义](book/chapt04/04-02-01-function-define.markdown)
        + [函数的参数](book/chapt04/04-02-02-function-param.markdown)
        + [函数的返回](book/chapt04/04-02-03-function-return.markdown)
    * [第三节 函数的调用和执行](book/chapt04/04-03-function-call.markdown)
    * [第四节 匿名函数及闭包](book/chapt04/04-04-anonymous-function.markdown)
    * [第五节 小结](book/chapt04/04-05-summary.markdown)

- [第五章 类和面向对象](book/chapt05/05-00-class-and-oop.markdown)
    * [第一节 类的结构和实现](book/chapt05/05-01-class-struct.markdown)
    * [第二节 类的成员变量及方法](book/chapt05/05-02-class-member-variables-and-methods.markdown)
    * [第三节 访问控制的实现](book/chapt05/05-03-class-visibility.markdown)
    * [第四节 类的继承, 多态及抽象类](book/chapt05/05-04-class-inherit-abstract.markdown)
    * [第五节 魔术方法,延迟绑定及静态成员](book/chapt05/05-05-class-magic-methods-latebinding.markdown)
    * [第六节 PHP保留类及特殊类](book/chapt05/05-06-class-reserved-and-special-classes.markdown)
    * [第七节 对象](book/chapt05/05-07-class-object.markdown)
    * [第八节 命名空间](book/chapt05/05-08-class-namespace.markdown)
    * [第九节 标准类](book/chapt05/05-09-spl.markdown)
    * [第十节 小结](book/chapt05/05-10-summary.markdown)

- [第六章 内存管理](book/chapt06/06-00-memory-management.markdown)
    * [第一节 内存管理概述](book/chapt06/06-01-memory-management-overview.markdown)
    * [第二节 PHP中的内存管理](book/chapt06/06-02-php-memory-manager.markdown)
    * [第三节 内存使用：申请和销毁](book/chapt06/06-03-php-memory-request-free.markdown)
    * [第四节 垃圾回收机制](book/chapt06/06-04-00-garbage-collection.markdown)
        + [新的垃圾回收机制](book/chapt06/06-04-01-new-garbage-collection.markdown)
    * [第五节 内存管理中的缓存](book/chapt06/06-05-php-memory-cache.markdown)
    * [第六节 写时复制(Copy-On-Write)](book/chapt06/06-06-copy-on-write.markdown)
    * [第七节 内存泄露](book/chapt06/06-07-memory-leaks.markdown)
    * [第八节 小结](book/chapt06/06-08-summary.markdown)

- [第七章 Zend虚拟机](book/chapt07/07-00-zend-vm.markdown)
    * [第一节 虚拟机概述](book/chapt07/07-01-zend-vm-overview.markdown)
    * [第二节 语法的实现](book/chapt07/07-02-00-php-syntax.markdown)
        + [词法分析](book/chapt07/07-02-01-zend-re2c-scanner.markdown)
        + [语法分析](book/chapt07/07-02-02-zend-yacc-parser.markdown)
        + [实现自己的语法](book/chapt07/07-02-03-custom-php-syntax.markdown)
    * [第三节 中间码的执行](book/chapt07/07-03-opcode-exec.markdown)
    * [第四节 源码的加密解密实现](book/chapt07/07-04-source-code-encrypt.markdown)
    * [第五节 小结](book/chapt07/07-05-summary.markdown)

- [第八章 线程安全]()
    * [第一节 线程安全概述]()
    * [第二节 线程、进程，并行，并发](book/chapt08/08-02-thread-process-and-concurrent.markdown)
    * [第三节 PHP中的线程安全](book/chapt08/08-03-zend-thread-safe-in-php.markdown)

- [第九章 错误和异常处理](book/chapt09/09-00-error-and-exception-handle.markdown)
    * [第一节 错误和异常]
    * [第二节 错误及其处理]
    * [第三节 异常]
        + 实现
        + 执行流
        + 处理
        + 异常的成本

- [第十章 输出缓存 Output Buffer](book/chapt10/10-00-output-buffer.markdown)
    * [第一节 输出缓冲及相关函数]
    * [第二节 输出缓存应用]
    * [第三接 输出缓存实现原理]

-------------
## 第二部分 扩展开发及实践

- [第十一章 扩展开发]()
    * 第一节 扩展开发概述

- 第十二章 文件和流
	* stream wrapper

- 第十三章 网络编程

- 第十四章 配置文件

- 第十五章 开发实例
    * 第一节 opcode缓存扩展
    * 第二节 性能监控及优化扩展
    * 第三节 扩展PHP语法,为PHP增加语法特性

-------------
## 第三部分 Better Explain
- 第十六章 PHP语言特性的实现
    * [第一节 循环语句](book/chapt16/16-01-00-php-loop.markdown)
        + [foreach的实现](book/chapt16/16-01-01-php-foreach.markdown)
    * [第二节 选择语句]

- 第十七章 PHP新功能
    * 命名空间(Namespace)
    * 匿名函数
    * 闭包
    * Traits
    * Generator

- 第十八章 CPHP以外: PHP编译器
    * HipHop VM
    * phc
    * Roadsend
    * Phalanger

- 第十九章 PHP各版本中的那些变动及优化
    * 哈希表的优化
    * 安全模式为什么去掉了

- 第二十章 怎样系列(Guides: how to \*)
	* 怎么样追查定位PHP的bug问题

- 附录
    * [附录A PHP及Zend API](book/A-PHP-Zend-API.markdown)
    * [附录B PHP的历史](book/B-PHP-Versions-and-History.markdown)
    * [附录C VLD扩展使用指南](book/C-php-vld.markdown)
    * [附录D 怎样为PHP贡献](book/D-how-to-contribute-to-php.markdown)
    * [附录E phpt测试文件说明](book/E-phpt-file.markdown)
    * [附录F PHP5.4.0新功能升级解析](book/F-upgrade-to-php-5-4-explain.markdown)














