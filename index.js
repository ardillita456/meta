const listItems = document.querySelectorAll(".listItem"),
  channelPreviews = Array.from(document.querySelectorAll(".channelPreview")),
  Input = document.querySelector("#Input"),
  cartaitor = [...document.querySelectorAll(".cartaitor")],
  cardescrip = document.querySelectorAll(".cardescrip");



  const disableActiveElement = (element) => {
    element.classList.remove("listItemActive");
  };
  
  const enableActiveElement = (element) => {
    element.classList.add("listItemActive");
  };
  
  const isElementActive = (element) => {
    return element.classList.contains("listItemActive");
  };
  
  const switchListItemStatus = (listItem) => {
    isElementActive(listItem)
      ? disableActiveElement(listItem)
      : enableActiveElement(listItem);
  };

  
  const enableChannelPreview = (element) => {
    element.classList.add("channelPreviewActive");
  };
  
  const disableChannelPreview = (element) => {
    element.classList.remove("channelPreviewActive");
  };

  
  const updatePreview = (listItem) => {
    const channelPreview = channelPreviews.find(({ id }) => {
      return id === listItem.id;
    });
  
    isElementActive(listItem)
      ? enableChannelPreview(channelPreview)
      : disableChannelPreview(channelPreview);
  };

  const updatecartaitor = (value) => {
    cartaitor.forEach((cartaitor) => {
      cartaitor.textContent = value;
    });
  };

  const updatecardescrip= (value) => {
    cardescrip.forEach((cardescrip) => {
      cardescrip.textContent = value;
    });
  };

  listItems.forEach((listItem) => {
    listItem.addEventListener("click", () => {
      // Switch List Item Status
      switchListItemStatus(listItem);
  
      // Update preview
      updatePreview(listItem);
    });
  });

  titleInput.addEventListener("input", (event) => {
    const {
      target: { value },
    } = event;
  
    updatecartaitor(value);
  });
 
  escucha.addEventListener("input" , ({target:{value} } ) => {
    updatecardescrip(value);
  });

 


