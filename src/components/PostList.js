import PostLink from "./PostLink";
import Spinner from '../components/Spinner/index';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useContext } from 'react';
import UserContext from '../context/userContext';

function PostList({ onDelete, isLoading, reorderPosts }) {
    const { posts } = useContext(UserContext);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(posts);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        reorderPosts(items);
    }

    const showNoPosts = <p>Sorry! No posts yet!</p>

    if (!isLoading && posts.length === 0) {
        return showNoPosts;
    }

    else if (isLoading && posts.length === 0) {
        return <Spinner />
    }

    else return (
        <div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="movedPostLinks">
                    {(provided) => (
                        <ul className="movedPostLinks"{...provided.droppableProps} ref={provided.innerRef}>
                            {posts.map((post, index) => {
                                return (
                                    <Draggable key={post.key} draggableId={post.key} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                                                <PostLink onDelete={onDelete} post={post} />
                                            </li>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default PostList;