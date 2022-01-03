(ns amplifystudio-cljs-tutorial.app.core
  (:require [reagent.dom :as rdom]
            ["aws-amplify" :refer [Amplify] :as amplify]
            ["@aws-amplify/ui-react" :refer [AmplifyProvider]]
            ["ui-components/RentalCollection" :default RentalCollection]
            ["aws-exports" :default aws-exports]))

(defn app []
  [:> AmplifyProvider
   [:h1 "Amplify Studio Tutorial"]
   [:> RentalCollection]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (js/console.log "main top")
  (-> Amplify (.configure aws-exports))
  (render))

(defn ^:dev/after-load reload! []
  (render))
