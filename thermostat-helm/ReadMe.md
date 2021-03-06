# Helm Chart for application

Install chart from directory with command:

        helm install  niko-thermostat  ./thermostat-helm  --set thermostat-chart.namespace=$(oc project  -q)




## ArgoCD deployment

definition:



        apiVersion: argoproj.io/v1alpha1
        kind: Application
        metadata:
          name: thermostat
        spec:
          destination:
            name: ''
            namespace: niko-helm-test
            server: 'https://kubernetes.default.svc'
          source:
            path: thermostat-helm
            repoURL: 'https://github.com/nmajorov/thermostat-demo-app'
            targetRevision: main
          project: default


### ArgoCD operator notice

Fixing role for openshift users

      oc adm policy add-cluster-role-to-user cluster-admin -z argocd-application-controller -n argocd

Get and change argocd admin password:

      kubectl -n argocd get secret argocd-cluster -o jsonpath='{.data.admin\.password}' | base64 -d


      kubectl -n argocd patch secret argocd-cluster \
        -p '{"stringData": {
          "admin.password": "admin"
        }}'


Allow argocd manage namespace:

        oc label namespace <your namespace> argocd.argoproj.io/managed-by=openshift-gitops
