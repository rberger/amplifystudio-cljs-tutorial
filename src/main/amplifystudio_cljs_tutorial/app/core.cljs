(ns amplifystudio-cljs-tutorial.app.core
  (:require [reagent.dom :as rdom]
            ["/aws-exports" :default ^js aws-exports]
            ["aws-amplify" :refer [Amplify] :as amplify]
            ["@aws-amplify/ui-react" :refer [AmplifyProvider]]
            ["ui-components/CardACollection" :default CardACollection]))

(defn app []
  [:h1 "Amplify Studio Tutorial"]
  [:> AmplifyProvider
   [:> CardACollection]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
