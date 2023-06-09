(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{347:function(v,_,e){"use strict";e.r(_);var t=e(4),a=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"mybatis-基础知识小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-基础知识小结"}},[v._v("#")]),v._v(" Mybatis 基础知识小结")]),v._v(" "),_("h2",{attrs:{id:"说说什么是-mybatis-吧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说说什么是-mybatis-吧"}},[v._v("#")]),v._v(" 说说什么是 Mybatis 吧")]),v._v(" "),_("p",[v._v("MyBatis 是一种优秀的持久层框架，它是一个基于 Java 的 "),_("code",[v._v("半ORM（对象关系映射）")]),v._v("框架，"),_("strong",[v._v("可以使用简单的 XML 或注解配置来映射原始类型、Map 和 Java 对象（POJO）到数据库表中的记录")]),v._v("。")]),v._v(" "),_("p",[v._v("MyBatis 支持自定义 "),_("code",[v._v("SQL")]),v._v("、存储过程和高级映射，可以将复杂的 JDBC 代码封装起来，使开发者只需要关注 "),_("code",[v._v("SQL")]),v._v(" 语句的编写和映射关系的配置，从而大大简化了数据库访问的开发工作。")]),v._v(" "),_("p",[v._v("MyBatis 的主要优点包括：易于使用、灵活性强、可以自定义 "),_("code",[v._v("SQL")]),v._v("、支持多种数据库、性能优秀等。")]),v._v(" "),_("p",[v._v("缺点是：对于复杂的 "),_("code",[v._v("SQL")]),v._v(" 还是需要自己手动编写,这就对码农的 SQL 功底有着较高的要求了,而且它的 "),_("code",[v._v("SQL")]),v._v(" 语句"),_("strong",[v._v("非常依赖数据库")]),v._v(",这就使得可能这个数据库可以用的 "),_("code",[v._v("SQL")]),v._v(" 换一个数据库就不行了。")]),v._v(" "),_("h2",{attrs:{id:"你刚刚说了-orm-框架-能不能告诉我什么是-orm-为什么说-mybatis-是半自动的-orm-框架呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#你刚刚说了-orm-框架-能不能告诉我什么是-orm-为什么说-mybatis-是半自动的-orm-框架呢"}},[v._v("#")]),v._v(" 你刚刚说了 ORM 框架,能不能告诉我什么是 ORM?为什么说 Mybatis 是半自动的 ORM 框架呢?")]),v._v(" "),_("p",[_("code",[v._v("ORM")]),v._v(" 说白了就是"),_("strong",[v._v("建立数据库字段和 "),_("code",[v._v("Java对象(POJO)")]),v._v(" 的一种映射关系技术")]),v._v(",")]),v._v(" "),_("p",[v._v("而 "),_("code",[v._v("Mybatis")]),v._v(" 由于"),_("strong",[v._v("建立这种映射需要我们手动编写 "),_("code",[v._v("SQL")])]),v._v(", 所以说它是半自动的。")]),v._v(" "),_("h2",{attrs:{id:"我们已经有-jdbc-了-为什么需要-mybatis-呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#我们已经有-jdbc-了-为什么需要-mybatis-呢"}},[v._v("#")]),v._v(" 我们已经有 JDBC 了,为什么需要 Mybatis 呢?")]),v._v(" "),_("p",[v._v("因为 "),_("code",[v._v("JDBC")]),v._v(" 有下面几个缺点:")]),v._v(" "),_("ol",[_("li",[v._v("建立连接麻烦。")]),v._v(" "),_("li",[_("code",[v._v("SQL")]),v._v(" 写在代码里面不好维护。")]),v._v(" "),_("li",[v._v("传参也很麻烦。")]),v._v(" "),_("li",[v._v("处理结果也很麻烦。")])]),v._v(" "),_("p",[v._v("一句话就是，"),_("code",[v._v("JDBC")]),v._v(" 使用起来麻烦，不如 "),_("code",[v._v("Mybatis")]),v._v(" 方便。")]),v._v(" "),_("h2",{attrs:{id:"和-的区别是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#和-的区别是什么"}},[v._v("#")]),v._v(" #{} 和 ${} 的区别是什么？")]),v._v(" "),_("ol",[_("li",[_("code",[v._v("${}")]),v._v(" 是 "),_("strong",[v._v("Properties 文件中的变量占位符")]),v._v("，它可以用于标签属性值和 sql 内部，属于静态文本替换，\n"),_("ul",[_("li",[v._v("比如 "),_("code",[v._v("${driver}")]),v._v(" 会被静态替换为"),_("code",[v._v("com.mysql.jdbc.Driver")]),v._v("。")])])]),v._v(" "),_("li",[_("code",[v._v("#{}")]),v._v(" 是 "),_("strong",[v._v("sql 的参数占位符")]),v._v("，MyBatis 会将 sql 中的 "),_("code",[v._v("#{}")]),v._v(" 替换为 "),_("code",[v._v("?")]),v._v(" 号，\n"),_("ul",[_("li",[v._v("在 sql 执行前会使用 PreparedStatement 的参数设置方法，按序给 sql 的 ? 号占位符设置参数值，")]),v._v(" "),_("li",[v._v("比如 "),_("code",[v._v("ps.setInt(0, parameterValue)")]),v._v("，"),_("code",[v._v("#{item.name}")]),v._v(" 的"),_("strong",[v._v("取值方式")]),v._v("是使用"),_("strong",[v._v("反射")]),v._v("从参数对象中获取 item 对象的 name 属性值，相当于 "),_("code",[v._v("param.getItem().getName()")])])])])]),v._v(" "),_("h2",{attrs:{id:"hibernate-和-mybatis-的区别是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hibernate-和-mybatis-的区别是什么"}},[v._v("#")]),v._v(" Hibernate 和 MyBatis 的区别是什么？")]),v._v(" "),_("p",[v._v("Hibernate 和 MyBatis 都是 Java 中常用的 ORM（Object-Relational Mapping）框架，用于将 Java 对象映射到数据库表中。")]),v._v(" "),_("p",[v._v("虽然它们都可以用于实现数据库访问，但是它们有一些区别：")]),v._v(" "),_("ol",[_("li",[v._v("映射方式不同：\n"),_("ul",[_("li",[v._v("Hibernate 是一种全自动 ORM 框架，它使用 Java 对象映射到数据库表，")]),v._v(" "),_("li",[v._v("而 MyBatis 则是一种半自动 ORM 框架，它使用 SQL 映射文件来指定如何将 Java 对象映射到数据库表。")])])]),v._v(" "),_("li",[v._v("性能不同：\n"),_("ul",[_("li",[_("strong",[v._v("MyBatis 的性能通常比 Hibernate 更好")]),v._v("，因为它可以更好地控制 SQL 语句的生成和执行，可以更好地优化 SQL 语句。")]),v._v(" "),_("li",[v._v("而 Hibernate 对 SQL 的生成和优化是自动的，可能会导致性能问题。")])])]),v._v(" "),_("li",[v._v("配置方式不同：\n"),_("ul",[_("li",[v._v("Hibernate 配置相对比较复杂，需要编写映射文件和配置文件，")]),v._v(" "),_("li",[v._v("而 "),_("strong",[v._v("MyBatis 配置相对简单")]),v._v("，只需要编写 SQL 映射文件和配置文件即可。")])])]),v._v(" "),_("li",[v._v("支持的数据库不同：\n"),_("ul",[_("li",[v._v("Hibernate 支持多种数据库，包括 MySQL、Oracle、SQL Server 等，")]),v._v(" "),_("li",[v._v("而 "),_("strong",[v._v("MyBatis 对数据库的支持相对较少")]),v._v("，主要支持 MySQL、Oracle、SQL Server、PostgreSQL 等常用数据库。")])])]),v._v(" "),_("li",[v._v("对象关系维护不同：\n"),_("ul",[_("li",[v._v("Hibernate 可以自动维护对象之间的关系，包括一对一、一对多、多对多等关系，")]),v._v(" "),_("li",[v._v("而 "),_("strong",[v._v("MyBatis 不支持自动维护对象之间的关系")]),v._v("，需要手动编写 SQL 语句来实现。")])])])]),v._v(" "),_("p",[v._v("综合来说：")]),v._v(" "),_("ol",[_("li",[v._v("如果需要快速开发，可以选择 Hibernate，")]),v._v(" "),_("li",[v._v("如果需要更好的性能和更灵活的 SQL 控制，可以选择 MyBatis。")])]),v._v(" "),_("h2",{attrs:{id:"xml-映射文件中-除了常见的-select、insert、update、delete-标签之外-还有哪些标签"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xml-映射文件中-除了常见的-select、insert、update、delete-标签之外-还有哪些标签"}},[v._v("#")]),v._v(" xml 映射文件中，除了常见的 select、insert、update、delete 标签之外，还有哪些标签？")]),v._v(" "),_("p",[v._v("还有很多其他的标签，"),_("code",[v._v("<resultMap>")]),v._v("、"),_("code",[v._v("<parameterMap>")]),v._v("、"),_("code",[v._v("<sql>")]),v._v("、"),_("code",[v._v("<include>")]),v._v("、"),_("code",[v._v("<selectKey>")]),v._v("，")]),v._v(" "),_("p",[v._v("加上动态 sql 的 9 个标签，"),_("code",[v._v("trim|where|set|foreach|if|choose|when|otherwise|bind")]),v._v(" 等，")]),v._v(" "),_("ul",[_("li",[v._v("其中 "),_("code",[v._v("<sql>")]),v._v(" 为 sql 片段标签，通过 "),_("code",[v._v("<include>")]),v._v(" 标签引入 sql 片段，")]),v._v(" "),_("li",[_("code",[v._v("<selectKey>")]),v._v(" 是不支持【自增的主键生成策略】标签。")])]),v._v(" "),_("h2",{attrs:{id:"dao-接口的工作原理是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dao-接口的工作原理是什么"}},[v._v("#")]),v._v(" Dao 接口的工作原理是什么？")]),v._v(" "),_("p",[v._v("在最佳实践中，通常一个 "),_("code",[v._v("xml")]),v._v(" 映射文件，都会写一个 Dao 接口与之对应。（ "),_("code",[v._v("xml")]),v._v(" <--\x3e "),_("code",[v._v("Mapper")]),v._v("）")]),v._v(" "),_("p",[_("strong",[v._v("Dao 接口就是人们常说的 "),_("code",[v._v("Mapper")]),v._v(" 接口")]),v._v("。")]),v._v(" "),_("ul",[_("li",[v._v("接口的"),_("strong",[v._v("全限名，就是映射文件中的 "),_("code",[v._v("namespace")]),v._v(" 的值")]),v._v("，")]),v._v(" "),_("li",[v._v("接口的"),_("strong",[v._v("方法名，就是映射文件中 "),_("code",[v._v("MappedStatement")]),v._v(" 的 id 值")]),v._v("，")]),v._v(" "),_("li",[v._v("接口"),_("strong",[v._v("方法内的参数，就是传递给 sql 的参数")]),v._v("。")])]),v._v(" "),_("p",[_("code",[v._v("Mapper")]),v._v(" 接口是没有实现类的，当调用接口方法时，【接口全限名 + 方法名】拼接字符串作为 key 值，可唯一定位一个 "),_("code",[v._v("MappedStatement")]),v._v(" ，")]),v._v(" "),_("p",[v._v("举例："),_("code",[v._v("com.mybatis3.mappers.StudentDao.findStudentById")]),v._v("，可以唯一找到 namespace 为 "),_("code",[v._v("com.mybatis3.mappers.StudentDao")]),v._v(" 下面 "),_("code",[v._v("id = findStudentById")]),v._v(" 的 "),_("code",[v._v("MappedStatement")]),v._v(" 。")]),v._v(" "),_("p",[v._v("在 MyBatis 中，每一个 "),_("code",[v._v("<select>")]),v._v("、"),_("code",[v._v("<insert>")]),v._v("、"),_("code",[v._v("<update>")]),v._v("、"),_("code",[v._v("<delete>")]),v._v(" 标签，都会被解析为一个 "),_("code",[v._v("MappedStatement")]),v._v(" 对象。")]),v._v(" "),_("h2",{attrs:{id:"dao-接口里的方法-参数不同时-方法能重载吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dao-接口里的方法-参数不同时-方法能重载吗"}},[v._v("#")]),v._v(" Dao 接口里的方法，参数不同时，方法能重载吗？")]),v._v(" "),_("p",[v._v("Dao 接口里的方法可以重载，但是 Mybatis 的 xml 里面的 ID 不允许重复。")]),v._v(" "),_("p",[v._v("还需要满足两个条件：")]),v._v(" "),_("ol",[_("li",[v._v("仅有一个无参方法和一个有参方法。")]),v._v(" "),_("li",[v._v("多个有参方法时，参数数量必须一致。且使用相同的 "),_("code",[v._v("@Param")]),v._v(" 注解，或者使用 "),_("code",[v._v("param1")]),v._v(" 这种。")])]),v._v(" "),_("blockquote",[_("p",[v._v("注意："),_("strong",[v._v("Mybatis 的 Dao 接口可以有多个重载方法，但是多个接口对应的映射必须只有一个，否则启动会报错。")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);