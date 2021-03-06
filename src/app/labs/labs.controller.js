'use strict';

angular.module('app')
	.controller('labsCtrl', ['$scope','$animate', '$state', function($scope, $animate, $state){
		// Set state here so that ng-show works on about
		$scope.posts = [
			{
				title: 'Mission Control',
				extTitle: 'Remote Fireworks Detenator',
				date: '06/26/2015',
				description: 'MissionControl is a Remote Web Based Fireworks detenator. It was originally written for a RaspberryPi running a node server to control GPIO. This re-write will be using an ESP8266 for GPIO relay control. The front end will be an ionic native application featuring individual relay control and management, as well as a customimizable launch sequences and graphing.',
				image: './assets/img/mission-control.png',
				url: 'http://github.com/cdurth/MissionControl_Ionic',
				icon: 'fa fa-rocket',
				tags: ['Java Script', 'JS', 'Javascript','Angular','ESP8266','Fireworks','Ionic']
			},
			{
				title: 'R3VL',
				extTitle: 'Social Music Queue',
				date: '05/20/2015',
				description: 'R3Vl is a crowdsourced party playlist. One host device is connected to the speakers and users at parties can connect to that party (device) and add songs to the party queue that will play on the host device. The users can view the queue and add one song every 30 seconds.',
				image: './assets/img/r3vl.png',
				url: 'http://github.com/cdurth/R3VL',
				icon: 'fa fa-music',
				tags: ['Java Script', 'JS', 'Javascript','Angular','Music','Node','Bootstrap','MongoDB']
			},
			{
				title: 'Engage Cincinnati',
				extTitle: 'IS3020 Final Project',
				date: '12/16/2014',
				description: 'The purpose of this project is to complement our system proposal case for IS3020. It is a visual mockup that documents the following use cases/requirements: Initial user visit (guest & permissions), User registration (authenticated user), Event Creation (requires authenticated user), Administration (remove users & events)',
				image: './assets/img/engage-cincinnati.png',
				url: 'http://github.com/cdurth/EngageCincinnati',
				icon: 'fa fa-building',
				tags: ['Java Script', 'JS', 'Javascript','Angular','Cincinnati','Node','MongoDB']
			}
		]
	}]);