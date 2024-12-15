const Loader = {
	__loader: null,
	show: function () 
	{
		if (this.__loader == null) 
		{
			const divContainer = document.createElement('div');
			divContainer.style.position = 'fixed';
			divContainer.style.top = '0';
			divContainer.style.left = '0';
			divContainer.style.width = '100vw';
			divContainer.style.height = '100vh';
			divContainer.style.backgroundColor = '#223843';
			divContainer.style.zIndex = '9998';
			divContainer.style.display = 'flex';
			divContainer.style.alignItems = 'center';
			divContainer.style.justifyContent = 'center';

			const div = document.createElement('div');
			div.style.width = '64px';
			div.style.height = '64px';
			div.style.border = '8px solid #e1e1e1';
			div.style.borderTop = '8px solid #fff';
			div.style.borderRadius = '50%';
			div.style.animation = 'spin 2s linear infinite';

			// CSS for rotation animation
			const styleSheet = document.createElement("style");
			
			styleSheet.innerText = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
			
			document.head.appendChild(styleSheet);
			divContainer.appendChild(div);
			this.__loader = divContainer;
			document.body.appendChild(this.__loader);
		}

		this.__loader.style.display = 'flex';

	},

	hide: function () {
		if (this.__loader) {
			this.__loader.style.display = 'none';
		}
	}
};

export default Loader