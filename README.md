3. 创建并修改 **bootstrap.yml**

    ```yaml
    spring:
  application:
    name: rsng-resource-manager
  cloud:
    inetutils:
      # 处理docker部署java镜像时 ip不一致
      ignored-interfaces:
        - docker0
        - veth.*
    nacos:
      # nacos_server_addr配置在系统环境变量中
      config:
        # 根据实际切换环境
        namespace: ${spring.profiles.active}
        file-extension: yaml
        shared-configs:
          - data-id: public.yaml
            group: DEFAULT_GROUP
            refresh: true
      discovery:
        namespace: ${spring.profiles.active}
    ```