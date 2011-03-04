<%@page contentType="text/html" pageEncoding="UTF-8"%><!DOCTYPE html>
<html>
	<head>
		<title>Simple raphael animation test</title>
                <style type="text/css">
                    body div#container {
                        width: 100%;
                        height: 100%; 
                    }

                </style>
	</head>
	<body>
            <div id="container"></div>
		<script type="text/javascript" src="./js/lib/raphael/raphael-min.js"></script>
		<script type="text/javascript" src="./js/src/simpleanimation.js"></script>
                <script type="text/javascript">
                    window.setTimeout(demee.test.SimpleAnimation.initApp, 100);
                </script>

	</body>
</html>
