// note: add js file at the end because js often relies on html and css having been loaded first.

<script>
    document.querySelector("#dark-mode")
    .addEventListener("click", function(){
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
);
    document.querySelector("#light-mode")
    .addEventListener("click", function(){
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
);

</script>