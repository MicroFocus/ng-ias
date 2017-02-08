function DialogComponent(MfDialogService) {
	this.openAlertDialog = function() {
		MfDialogService
			.alert({
				textContent: 'You opened an alert dialog.',
                title: 'Alert!'
            })
			.then(
				function() {
					console.log('resolved');
				},
				function() {
					console.log('rejected');
				});
	};

	this.openConfirmationDialog = function() {
		MfDialogService
			.confirm({
				textContent: 'Are you sure?',
                title: 'Confirmation'
            })
			.then(
				function() {
					console.log('confirmed');
				},
				function() {
					console.log('declined');
				});
	};

	this.openPromptDialog = function() {
		MfDialogService
			.prompt({
				cancel: 'Cancel',
				ok: 'OK',
				textContent: 'What do you want to say?',
                title: 'Prompt'
            })
			.then(
				function(result) {
					console.log(result);
				},
				function() {
					console.log('declined');
				});
	};
}

DialogComponent.$inject = [ 'MfDialogService' ];

angular.module('app').component('dialogComponent', {
	controller: DialogComponent,
	templateUrl: 'src/components/dialog.component.html'
});
