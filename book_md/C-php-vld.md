# 附录C VLD扩展使用指南

[VLD(Vulcan Logic Dumper)](http://pecl.php.net/package/vld/)是一个挂钩在Zend引擎下，
并且输出PHP脚本生成的中间代码（执行单元）的扩展。
它可以在一定程序上查看Zend引擎内部的一些实现原理，是我们学习PHP源码的必备良器。
它的作者是[Derick Rethans](http://derickrethans.nl/projects.html),
除了VLD扩展，我们常用的[XDebug扩展](http://xdebug.org/)的也有该牛人的身影。

VLD扩展是一个开源的项目，在[这里](http://pecl.php.net/package/vld/)可以下载到最新的版本，
虽然最新版本的更新也是一年前的事了。作者没有提供编译好的扩展，Win下使用VC6.0编译生成dll文件。

*nix系统下直接configue,make,make install生成。如果遇到问题，请自行Google之。

看一个简单的例子,假如存在t.php文件，其内容如下：

    [php]
    $a = 10;
    echo $a;

在命令行下使用VLD扩展显示信息。

    [shell]
    php -dvld.active=1 t.php

-dvld.active=1表示激活VLD扩展，使用VLD扩展输出中间代码，此命令在CMD中输出信息为：

    [shell]
    Branch analysis from position: 0
    Return found
    filename:       D:\work\xampp\xampp\php\t.php
    function name:  (null)
    number of ops:  5
    compiled vars:  !0 = $a
    line     # *  op                           fetch          ext  return  operands
    ---------------------------------------------------------------------------------
       2     0  >   EXT_STMT
             1      ASSIGN                                                   !0, 10
       3     2      EXT_STMT
             3      ECHO                                                     !0
       4     4    > RETURN                                                   1

    branch: #  0; line:     2-    4; sop:     0; eop:     4
    path #1: 0,
    10

如上为VLD输出的PHP代码生成的中间代码的信息，说明如下：

* Branch analysis from position 这条信息多在分析数组时使用。
* Return found 是否返回，这个基本上有都有。
* filename 分析的文件名
* function name 函数名，针对每个函数VLD都会生成一段如上的独立的信息，这里显示当前函数的名称
* number of ops 生成的操作数
* compiled vars 编译期间的变量，这些变量是在PHP5后添加的，它是一个缓存优化。这样的变量在PHP源码中以IS_CV标记。
* op list 生成的中间代码的变量列表

使用-dvld.active参数输出的是VLD默认设置，如果想看更加详细的内容。可以使用-dvld.verbosity参数。

    [shell]
    php -dvld.active=1 -dvld.verbosity=3 t.php

-dvld.verbosity=3或更大的值的效果都是一样的，它们是VLD在当前版本可以显示的最详细的信息了，
包括各个中间代码的操作数等。显示结果如下：

    [shell]
    Finding entry points
    Branch analysis from position: 0
    Add 0
    Add 1
    Add 2
    Add 3
    Add 4
    Return found
    filename:       D:\work\xampp\xampp\php\t.php
    function name:  (null)
    number of ops:  5
    compiled vars:  !0 = $a
    line     # *  op                           fetch          ext  return  operands
    --------------------------------------------------------------------------------
    -
       2     0  >   EXT_STMT                                          RES[  IS_UNUSED  ]         OP1[  IS_UNUSED  ] OP2[  IS_UNUSED  ]
             1      ASSIGN                                                    OP1[IS_CV !0 ] OP2[ ,  IS_CONST (0) 10 ]
       3     2      EXT_STMT                                          RES[  IS_UNUSED  ]         OP1[  IS_UNUSED  ] OP2[  IS_UNUSED  ]
             3      ECHO                                                      OP1[IS_CV !0 ]
             4    > RETURN                                                    OP1[IS_CONST (0) 1 ]

    branch: #  0; line:     2-    3; sop:     0; eop:     4
    path #1: 0,
    10

以上的信息与没有加-dvld.verbosity=3的输出相比，多了Add 字段，还有中间代码的操作数的类型，如IS_CV，IS_CONST等。
PHP代码中的$a = 10;  其中10的类型为IS_CONST，$a作为一个编译期间的一个缓存变量存在，其类型为IS_CV。

如果我们只是想要看输出的中间代码，并不想执行这段PHP代码，可以使用-dvld.execute=0来禁用代码的执行。

    [shell]
    php -dvld.active=1 -dvld.execute=0 t.php

运行这个命令，你会发现这与最开始的输出有一点点不同，它没有输出10。
除了直接在屏幕上输出以外，VLD扩展还支持输出.dot文件，如下的命令：

    [shell]
    php -dvld.active=1 -dvld.save_dir='D:\tmp' -dvld.save_paths=1 -dvld.dump_paths=1 t.php

以上的命令的意思是将生成的中间代码的一些信息输出在D:/tmp/paths.dot文件中。
-dvld.save_dir指定文件输出的路径，-dvld.save_paths控制是否输出文件，-dvld.dump_paths控制输出的内容，
现在只有0和1两种情况。
输出的文件名已经在程序中硬编码为paths.dot。这三个参数是相互依赖的关系，一般都会同时出现。

总结一下，VLD扩展的参数列表：

* -dvld.active 是否在执行PHP时激活VLD挂钩，默认为0，表示禁用。可以使用-dvld.active=1启用。
* -dvld.skip_prepend 是否跳过php.ini配置文件中[auto_prepend_file](http://php.net/auto-prepend-file)指定的文件，
  默认为0，即不跳过包含的文件，显示这些包含的文件中的代码所生成的中间代码。此参数生效有一个前提条件：-dvld.execute=0
* -dvld.skip_append 是否跳过php.ini配置文件中[auto_append_file](http://php.net/auto-append-file)指定的文件，
  默认为0，即不跳过包含的文件，显示这些包含的文件中的代码所生成的中间代码。此参数生效有一个前提条件：-dvld.execute=0
* -dvld.execute 是否执行这段PHP脚本，默认值为1，表示执行。可以使用-dvld.execute=0，
  表示只显示中间代码，不执行生成的中间代码。
* -dvld.format  是否以自定义的格式显示，默认为0，表示否。可以使用-dvld.format=1，
  表示以自己定义的格式显示。这里自定义的格式输出是以-dvld.col_sep指定的参数间隔
* -dvld.col_sep	 在-dvld.format参数启用时此函数才会有效，默认为 "\t"。
* -dvld.verbosity 是否显示更详细的信息，默认为1，其值可以为0，1，2，3 其实比0小的也可以，
  只是效果和0一样，比如0.1之类，但是负数除外，负数和效果和3的效果一样
  比3大的值也是可以的，只是效果和3一样。
* -dvld.save_dir 指定文件输出的路径，默认路径为/tmp。
* -dvld.save_paths 控制是否输出文件，默认为0，表示不输出文件
* -dvld.dump_paths 控制输出的内容，现在只有0和1两种情况，默认为1，输出内容
